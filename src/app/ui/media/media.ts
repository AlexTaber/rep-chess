import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { breakpoints } from "./breakpoints";

interface MediaConfig {
  key: MediaConfigKey;
  queryList: MediaQueryList;
  callback(event: MediaQueryListEvent): void;
}

type ResponsiveConfigValue = any;

export interface ResponsiveConfig {
  mobile?: ResponsiveConfigValue;
  tablet?: ResponsiveConfigValue;
  largeTablet?: ResponsiveConfigValue;
  desktop?: ResponsiveConfigValue;
  wideScreen?: ResponsiveConfigValue;
}

type MediaConfigKey =
  | "mobile"
  | "tablet"
  | "largeTablet"
  | "desktop"
  | "wideScreen";

@Injectable({ providedIn: "root" })
export class Media {
  public matches = new BehaviorSubject({
    mobile: false,
    tablet: false,
    largeTablet: false,
    desktop: false,
    wideScreen: false,
  });

  private mediaConfigs = [
    this.getConfigFromKey("mobile", `( min-width: 0px )`),
    this.getConfigFromKey(
      "tablet",
      `( min-width: calc(${breakpoints.tablet} + 1px) )`
    ),
    this.getConfigFromKey(
      "desktop",
      `( min-width: calc(${breakpoints.desktop} + 1px) )`
    ),
    this.getConfigFromKey(
      "wideScreen",
      `( min-width: calc(${breakpoints.wideScreen} + 1px) )`
    ),
  ];

  private reversedConfigs = this.mediaConfigs.slice().reverse();
  private matchesArray = new BehaviorSubject(this.getMatchesArray());
  private matchingIndex = new BehaviorSubject(this.getMatchingIndex());
  private currentMatch = new BehaviorSubject(this.getCurrentMatch());

  constructor() {
    this.setListeners();
    this.setMatchesValue();

    this.matches.subscribe(matches => {
      this.matchesArray.next(this.getMatchesArray());
      this.matchingIndex.next(this.getMatchingIndex());
      this.currentMatch.next(this.getCurrentMatch());
    });
  }

  public matchesDevice(key: MediaConfigKey): boolean {
    return this.currentMatch.value.key === key;
  }

  public matchesDeviceOrAbove(key: MediaConfigKey): boolean {
    const index = this.getConfigIndexByKey(key);
    return this.matchingIndex.value >= index;
  }

  public matchesDeviceOrBelow(key: MediaConfigKey): boolean {
    const index = this.getConfigIndexByKey(key);
    return this.matchingIndex.value <= index;
  }

  public responsive(
    responsiveConfig: ResponsiveConfig
  ): ResponsiveConfigValue {
    for (const config of this.reversedConfigs) {
      if (this.matches.value[config.key] && responsiveConfig[config.key]) {
        return responsiveConfig[config.key];
      }
    }

    return responsiveConfig.mobile;
  }

  private getConfigFromKey(key: MediaConfigKey, query: string): MediaConfig {
    return {
      key,
      queryList: window.matchMedia(query),
      callback: (event: MediaQueryListEvent) => this.handleMatchChange(event, key),
    };
  }
  
  private handleMatchChange(
    event: MediaQueryListEvent,
    key: MediaConfigKey
  ): void {
    this.matches.next({ ...this.matches.value, [key]: event.matches });
  }
  
  private getMatchesArray(): boolean[] {
    return this.mediaConfigs.map((config) => this.matches.value[config.key]);
  }
  
  private getMatchingIndex(): number {
    return this.matchesArray.value.filter(Boolean).length - 1;
  }
  
  private getCurrentMatch(): MediaConfig {
    return this.mediaConfigs[this.matchingIndex.value];
  }
  
  private setListeners(): void {
    this.mediaConfigs.forEach(this.setListenerForMediaQuery);
  }
  
  private setListenerForMediaQuery(config: MediaConfig): void {
    config.queryList.addEventListener("change", config.callback);
  }
  
  private setMatchesValue(): void {
    this.matches.next(this.mediaConfigs.reduce((matches, config) => {
      return {
        ...matches,
        [config.key]: config.queryList.matches,
      };
    }, this.matches.value));
  }

  private getConfigIndexByKey(key: MediaConfigKey): number {
    return this.mediaConfigs.findIndex((config) => config.key === key);
  }
}

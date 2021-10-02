import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { akitaDevtools, persistState } from '@datorama/akita';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

akitaDevtools({
  sortAlphabetically: true,
});

persistState();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

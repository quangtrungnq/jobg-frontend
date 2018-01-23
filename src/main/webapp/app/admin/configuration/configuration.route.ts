import { Route } from '@angular/router';

import { JobgConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'jobg-configuration',
    component: JobgConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};

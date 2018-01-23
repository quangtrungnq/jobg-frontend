import { Route } from '@angular/router';

import { JobgHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'jobg-health',
    component: JobgHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};

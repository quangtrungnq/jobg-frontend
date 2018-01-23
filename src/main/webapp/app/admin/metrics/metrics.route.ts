import { Route } from '@angular/router';

import { JobgMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'jobg-metrics',
    component: JobgMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};

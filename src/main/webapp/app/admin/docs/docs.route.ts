import { Route } from '@angular/router';

import { JobgDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: JobgDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};

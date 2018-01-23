import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JobgSharedModule } from '../shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
    adminState,
    AuditsComponent,
    UserMgmtComponent,
    UserDialogComponent,
    UserDeleteDialogComponent,
    UserMgmtDetailComponent,
    UserMgmtDialogComponent,
    UserMgmtDeleteDialogComponent,
    LogsComponent,
    JobgMetricsMonitoringModalComponent,
    JobgMetricsMonitoringComponent,
    JobgHealthModalComponent,
    JobgHealthCheckComponent,
    JobgConfigurationComponent,
    JobgDocsComponent,
    AuditsService,
    JobgConfigurationService,
    JobgHealthService,
    JobgMetricsService,
    LogsService,
    UserResolvePagingParams,
    UserResolve,
    UserModalService
} from './';

@NgModule({
    imports: [
        JobgSharedModule,
        RouterModule.forRoot(adminState, { useHash: true }),
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    ],
    declarations: [
        AuditsComponent,
        UserMgmtComponent,
        UserDialogComponent,
        UserDeleteDialogComponent,
        UserMgmtDetailComponent,
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        LogsComponent,
        JobgConfigurationComponent,
        JobgHealthCheckComponent,
        JobgHealthModalComponent,
        JobgDocsComponent,
        JobgMetricsMonitoringComponent,
        JobgMetricsMonitoringModalComponent
    ],
    entryComponents: [
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        JobgHealthModalComponent,
        JobgMetricsMonitoringModalComponent,
    ],
    providers: [
        AuditsService,
        JobgConfigurationService,
        JobgHealthService,
        JobgMetricsService,
        LogsService,
        UserResolvePagingParams,
        UserResolve,
        UserModalService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobgAdminModule {}

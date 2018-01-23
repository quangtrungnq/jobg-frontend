import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    JobgSharedLibsModule,
    JhiLanguageHelper,
    FindLanguageFromKeyPipe,
    JobgAlertComponent,
    JobgAlertErrorComponent
} from './';

@NgModule({
    imports: [
        JobgSharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        JobgAlertComponent,
        JobgAlertErrorComponent
    ],
    providers: [
        JhiLanguageHelper,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        JobgSharedLibsModule,
        FindLanguageFromKeyPipe,
        JobgAlertComponent,
        JobgAlertErrorComponent
    ]
})
export class JobgSharedCommonModule {}

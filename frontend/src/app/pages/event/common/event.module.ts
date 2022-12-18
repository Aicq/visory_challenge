// Framework imports
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import EventRouter from './event.router';
import {EventComponent} from '../event.component';
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        EventComponent,
    ],
    exports: [
        EventComponent,
    ],
    imports: [
        CommonModule,
        EventRouter,
        RouterModule
    ],
    providers: [],
})
export class EventModule {
}


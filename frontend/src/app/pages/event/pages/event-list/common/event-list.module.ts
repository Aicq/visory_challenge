import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import EventListRouter from './event-list.router';
import {EventListComponent} from '../event-list.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        EventListComponent,
    ],
    exports: [
        EventListComponent,
    ],
    imports: [
        CommonModule,
        EventListRouter,
        NgSelectModule,
        FormsModule,
    ],
    providers: [],
})

export class EventListModule {
}

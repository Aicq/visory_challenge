import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import EventListRouter from './event-list.router';
import {EventListComponent} from '../event-list.component';

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
        FormsModule,
    ],
    providers: [],
})

export class EventListModule {
}

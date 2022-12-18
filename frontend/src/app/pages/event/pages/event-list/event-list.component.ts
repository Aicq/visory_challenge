import {Component, OnInit} from '@angular/core';

import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

import {TextConstants} from "../../../../common/constants/text.constants";
import {EventService} from "../../common/event.service";
import {EventModel} from "../../common/event.models";
import {eventLocations} from "../../common/event.constants";
import {EventLocation} from "../../common/event.interfaces";

@Component({
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
    public endDateTime: string;
    public events: EventModel[] = [];
    public eventsObservable: Observable<any>;
    public eventLocationCountryCode: string;
    public eventLocations: EventLocation[] = eventLocations;
    public startDateTime: string;
    public textConstants: typeof TextConstants = TextConstants;

    constructor(private eventService: EventService) {
    }

    public ngOnInit(): void {
        this.setEvents();
    }

    /**
     * Resets all search params and refreshes events list
     */
    public resetSearch(): void {
        this.startDateTime = undefined;
        this.endDateTime = undefined;
        this.eventLocationCountryCode = undefined;
        this.setEvents();
    }

    /**
     * Retrieves events based on the currently specified search params
     * @private
     */
    public setEvents(): void {
        this.eventsObservable = this.eventService.getEvents(
            this.eventLocationCountryCode,
            this.startDateTime,
            this.endDateTime
        ).pipe(
            tap((events: EventModel[]) => {
                console.log(events);
                this.events = events;
            })
        );
    }
}

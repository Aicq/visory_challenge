import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {ticketMasterApiKey, ticketMasterApiUrl} from "./event.constants";
import {EventModel} from "./event.models";
import {DateHelper} from "../../../common/helpers/date-helper";

@Injectable({
    providedIn: 'root',
})
export class EventService {
    constructor(private http: HttpClient) {
    }

    public getEvents(eventLocationCountryCode?: string, startDateTime?: string, endDateTime?: string): Observable<EventModel[]> {
        let countryCodeQuery = '';
        let startDateTimeQuery = '';
        let endDateTimeQuery = '';
        if (eventLocationCountryCode) {
            countryCodeQuery = `countryCode=${eventLocationCountryCode}`
        }
        if (startDateTime) {
            startDateTimeQuery = `startDateTime=${DateHelper.getTicketMasterFormattedDateString(startDateTime)}`
        }
        if (endDateTime) {
            endDateTimeQuery = `endDateTime=${DateHelper.getTicketMasterFormattedDateString(endDateTime)}`
        }
        const requestUrl = `${ticketMasterApiUrl}${countryCodeQuery}&${startDateTimeQuery}&${endDateTimeQuery}&apikey=${ticketMasterApiKey}`;

        return this.http.get<any>(requestUrl, {}).pipe(
            map((eventsResponse) => {
                return eventsResponse._embedded.events.map((event) => new EventModel(event));
            })
        );
    }
}

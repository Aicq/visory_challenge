import {EventAccessibility, EventPromoter, EventTicketLimit} from "./event.interfaces";

export class EventModel {
    accessibility: EventAccessibility;
    displayImage: EventImageModel;
    id: string;
    images: EventImageModel[] = [];
    name: string;
    promoter: EventPromoter;
    ticketLimit: EventTicketLimit;
    url: string;

    constructor(model?: Partial<EventModel>) {
        if (model) {
            Object.assign(this, model);
            // Ensure our displayImage is always the largest available option
            if (this.images && this.images.length) {
                let largestWidth = 0;
                for (const image of this.images) {
                    if (image.width > largestWidth) {
                        this.displayImage = image;
                        largestWidth = image.width;
                    }
                }
            }
        }
    }
}

export class EventImageModel {
    fallback: boolean;
    height: number;
    ratio: string;
    url: string;
    width: number;
}

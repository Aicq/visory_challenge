export class EventListModel {
    constructor(model?: Partial<EventListModel>) {
        if (model) {
            Object.assign(this, model);
        }
    }
}

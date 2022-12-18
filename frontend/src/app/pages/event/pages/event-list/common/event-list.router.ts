import {RouterModule, Routes} from '@angular/router';
import {EventListComponent} from '../event-list.component';

const EventListRouter: Routes = [
    {
        path: '',
        component: EventListComponent
    },
];

export default RouterModule.forChild(EventListRouter);


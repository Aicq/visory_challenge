import {RouterModule, Routes} from '@angular/router';

import {EventComponent} from '../event.component';

const EventRouter: Routes = [
    {
        path: '',
        component: EventComponent,
        children: [
            {
                path: '',
                loadChildren: async () => (await import('../pages/event-list/common/event-list.module')).EventListModule,
            },
        ]
    }
];

export default RouterModule.forChild(EventRouter);


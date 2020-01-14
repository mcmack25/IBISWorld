import { RouterModule } from '@angular/router';
import { HomeContainer } from './containers/home/home.container.component';
// Route Configuration
export const routes = ([
    { path: 'home', component: HomeContainer },
    { path: '**', component: HomeContainer }
]);
export const routing = RouterModule.forRoot(routes);
//# sourceMappingURL=app-routing.module.js.map
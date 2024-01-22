import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppSidebarComponent } from './layouts/sidebar/sidebar.component';
import { DefaultComponent } from './pages/Default/Default.component';

export const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
    }
];

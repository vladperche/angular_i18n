import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { LoginComponent } from './login/login.component';
import { MasterpageComponent } from './masterpage/masterpage.component';

export const routes: Routes = [
    { path: 'Login', component: LoginComponent },
    { path: '', component: MasterpageComponent,
        children: [
            { path: 'Home', component: HomeComponent },
            { path: 'Users', component: UsersComponent },
            { path: 'Groups', component: GroupsComponent }        
        ]
    }
];

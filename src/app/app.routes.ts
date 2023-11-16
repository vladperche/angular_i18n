import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { LoginComponent } from './login/login.component';
import { MasterpageComponent } from './masterpage/masterpage.component';
import { AuthGuard } from './shared/services/route.guard';

export const routes: Routes = [
    { path: 'Login', component: LoginComponent },
    { path: '', component: MasterpageComponent, canActivate: [AuthGuard],
        children: [
            { path: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
            { path: 'Users', component: UsersComponent, canActivate: [AuthGuard] },
            { path: 'Groups', component: GroupsComponent, canActivate: [AuthGuard] },
            { path: '', component: HomeComponent, canActivate: [AuthGuard] }
        ]
    }
];

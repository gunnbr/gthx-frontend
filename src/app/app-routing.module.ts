import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { FactoidListComponent } from './factoids/factoid-list.component';
import { AdminComponent } from './admin/admin.component';
import { StatsComponent } from './stats/stats.component';
import { CommandsComponent } from './commands/commands.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'factoids', component: FactoidListComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'commands', component: CommandsComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

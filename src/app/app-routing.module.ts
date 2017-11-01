import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { FactoidListComponent } from './factoids/factoid-list.component';
import { AdminComponent } from './admin/admin.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {path: 'factoids', component: FactoidListComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

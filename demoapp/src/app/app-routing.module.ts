import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component'; 
import { MembersComponent } from './members/members.component'; 
import { EventsComponent } from './events/events.component'; 
import { FooterComponent } from './footer/footer.component'; 


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home"}, 
  { path: "home", component: HomeComponent},
  { path: "header", component: HeaderComponent},
  { path: "members", component: MembersComponent},
  { path: "events", component: EventsComponent},
  { path: "footer", component: FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

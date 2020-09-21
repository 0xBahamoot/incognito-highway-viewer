import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicViewerComponent } from './topic-viewer/topic-viewer.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topicviewer', component: TopicViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

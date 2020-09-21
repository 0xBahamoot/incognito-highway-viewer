import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { HttpClientModule } from '@angular/common/http';
import { TopicViewerComponent } from './topic-viewer/topic-viewer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopicViewerComponent,
  ],
  imports: [
    HttpClientModule,
    ScrollPanelModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTooltipModule} from '@angular/material/tooltip';
import { LectureDetailComponent } from './lecture-detail/lecture-detail.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatIconModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    LectureDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

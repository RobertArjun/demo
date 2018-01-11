import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule,MdCheckboxModule,MdInputModule,MdDialogModule,MdToolbarModule,MdIconModule,MdCardModule,MdRadioModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AddressComponent} from './addresscomponent.component';
import {SuccessDialogComponent} from './successdialog.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdDialogModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdRadioModule,
    HttpModule,
    FormsModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  declarations: [
    AppComponent,
    AddressComponent,
    SuccessDialogComponent
  ],
  entryComponents: [
    SuccessDialogComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

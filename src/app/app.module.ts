import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DialogModule } from '@progress/kendo-angular-dialog';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        // Register the modules
        BrowserAnimationsModule,
        ButtonsModule,
        DialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
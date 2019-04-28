import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OpenlayersEditorComponent} from './openlayers-editor/openlayers-editor.component';

@NgModule({
    declarations: [
        AppComponent,
        OpenlayersEditorComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

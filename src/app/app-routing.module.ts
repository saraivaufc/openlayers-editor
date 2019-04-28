import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OpenlayersEditorComponent} from './openlayers-editor/openlayers-editor.component';

const routes: Routes = [
    {path​: ''​, component​: OpenlayersEditorComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

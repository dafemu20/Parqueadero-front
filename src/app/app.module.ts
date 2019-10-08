import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { IngresarVehiculoComponent } from './components/ingresar-vehiculo/ingresar-vehiculo.component';
import { SalidaVehiculoComponent } from './components/salida-vehiculo/salida-vehiculo.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '/ingresarVehiculo', pathMatch: 'full'},
  {path: 'ingresarVehiculo', component: IngresarVehiculoComponent},
  {path: 'salidaVehiculo', component: SalidaVehiculoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IngresarVehiculoComponent,
    SalidaVehiculoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

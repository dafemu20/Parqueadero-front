import { Injectable } from '@angular/core';
import {Tiquete} from '../model/tiquete';
import {Vehiculo} from '../model/vehiculo';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private urlEndPointSalida: string = 'https://localhost:44330/api/Vigilante/darSalidaVehiculo/';

  private urlEndPointEntrada:string = 'https://localhost:44330/api/Vigilante/generarTiqueteIngreso';

  constructor(private http: HttpClient) { }

  obtenerTiqueteSalida(placa: string):Observable<Tiquete>{
    return this.http.get(this.urlEndPointSalida+placa).pipe(map(response => response as Tiquete));
  }

  ingresarVehiculo(vehiculo: Vehiculo): Observable<any> {
    let parametro = JSON.stringify(vehiculo);
    return this.http.post(this.urlEndPointEntrada, vehiculo);
  }

}

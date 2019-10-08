import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../service/vehiculo.service';
import { Tiquete } from '../../model/tiquete';
import swal from 'sweetalert2';


@Component({
  selector: 'app-salida-vehiculo',
  templateUrl: './salida-vehiculo.component.html',
  styleUrls: ['./salida-vehiculo.component.css']
})
export class SalidaVehiculoComponent{

  private placa: string;
  private tiquete: Tiquete = new Tiquete();

  constructor(private vehiculoService: VehiculoService) { }

  public darSalidaVehiculo(): any{
    this.vehiculoService.obtenerTiqueteSalida(this.placa).subscribe((response: Tiquete)=>{
      this.tiquete = response;
    }, (error)=> swal.fire('Error', error.error, 'error'));
  }

}

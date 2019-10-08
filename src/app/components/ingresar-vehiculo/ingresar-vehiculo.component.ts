import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../model/vehiculo';
import { VehiculoService } from '../../service/vehiculo.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-ingresar-vehiculo',
  templateUrl: './ingresar-vehiculo.component.html',
  styleUrls: ['./ingresar-vehiculo.component.css']
})
export class IngresarVehiculoComponent{

  private vehiculo: Vehiculo = new Vehiculo();

  constructor(private vehiculoService: VehiculoService) { }

  public ingresarVehiculo(): void{
    this.vehiculoService.ingresarVehiculo(this.vehiculo).subscribe((response)=>{
      swal.fire('Vehiculo ingresado', 'Vehiculo ha sido ingresado', 'success');
    }, (error)=> swal.fire('Error', error.error, 'error'));
  }

}

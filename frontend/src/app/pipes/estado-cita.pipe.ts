import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoCita'
})
export class EstadoCitaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value == false? "Pendiente" : "Atendido"

    //return null;
  }

}

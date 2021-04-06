import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroeImagen'
})
export class HeroeImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    //let ruta: string = `./assets/heroes/` + heroe.id + `.jpg`;
    //console.log(ruta);
    return `./assets/heroes/${heroe.id}.jpg`;
  }
}

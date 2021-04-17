import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img {
      width:100%;
      border-radius:5px;
    }
    `
  ]
})
export class AgregarComponent implements OnInit {

  //Objeto para el selector
  publishers = [
    {
      id: 'DC Comics',
      description: 'DC-Comics'
    },
    {
      id: 'Marvel Comics',
      description: 'Marvel-Comics'
    },
    {
      id: 'Desconocido',
      description: 'No Identificado'
    }
  ]
  
  //Objeto para la imagen
  heroeAgregar: Heroe= {
     alter_ego:'',
     characters:'',
     first_appearance:'',
     publisher:Publisher.Desconocido,
     superhero:'',
     alt_img:''
  }

  constructor(private serviceHeroe: HeroesService, private activatedRoute:ActivatedRoute, private router: Router,private snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
    //console.log(this.router.url.includes('editar'));
    
    if (!this.router.url.includes('editar')) {
      return;
    }
    else{
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.serviceHeroe.getHeroe(id))
      )
      .subscribe(heroe => this.heroeAgregar = heroe);
    }
  }
  
  addHeroe(){
    if (this.heroeAgregar.superhero.trim().length === 0) {
      return;  
    } 

    if (this.heroeAgregar.alt_img?.trim().length === 0) {
      return;  
    } 

    if (this.heroeAgregar.id) {
      this.serviceHeroe.setUpdateHeroe(this.heroeAgregar)
      .subscribe(resp => {
        this.heroeAgregar = resp;
        this.mostrarSnackBar("Registro Actualizado");
      });
    }
    else{
      //Crear heroe
      this.serviceHeroe.setHeroe(this.heroeAgregar)
      .subscribe(resp => {
        this.heroeAgregar = resp;
        this.mostrarSnackBar("Registro Guardado");
      });
      this.router.navigate(['/heroes',this.heroeAgregar.id]);
    }  
  }

  eraseHeroe(){
    
    const respuesta = this.dialog.open(ConfirmarComponent,{
        data:{...this.heroeAgregar}
      });

      respuesta.afterClosed().subscribe(
        (result) =>{
          console.log(result);
            if (result) {
              if (!this.heroeAgregar.id) {
                return;  
              } else{
                this.serviceHeroe.setDeleteHeroe(this.heroeAgregar.id)
                .subscribe(resp => console.log(resp));
                this.router.navigate(['/heroes']);
              }          
            }
        }
      );
  }

  mostrarSnackBar(mensaje: string){
    this.snackBar.open(mensaje,"Aceptar",{
      duration:2500
    });
  }

}



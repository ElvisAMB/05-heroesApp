import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe) { }  //Por ser de acceso pública puedo usarla en el html

  ngOnInit(): void {
    console.log(this.data);
  }

  cerrarDialogo(){
    this.dialogRef.close();
  }

  aceptarRespuesta()
  {
    this.dialogRef.close(true);
  }
}

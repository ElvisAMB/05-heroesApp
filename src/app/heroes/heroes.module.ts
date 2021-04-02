import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AgregarComponent, 
    BuscarComponent, 
    HeroeComponent, 
    ListadoComponent, 
    HomeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MaterialModule,
    //MatToolbarModule,
    //MatButtonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }

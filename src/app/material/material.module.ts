import { NgModule } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';


@NgModule({
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }

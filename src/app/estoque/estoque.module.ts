import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './estoque/estoque.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    EstoqueComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    MatButtonModule
  ]
})
export class EstoqueModule { }

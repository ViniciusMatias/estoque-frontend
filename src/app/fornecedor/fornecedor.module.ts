import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    FornecedorComponent
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    MatButtonModule
  ]
})
export class FornecedorModule { }

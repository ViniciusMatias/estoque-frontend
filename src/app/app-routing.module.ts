import { FornecedorComponent } from './fornecedor/fornecedor/fornecedor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", pathMatch: 'full', redirectTo: 'fornecedor',
  },
  {
    path: 'fornecedor', loadChildren: () => import("./fornecedor/fornecedor.module").then(m => m.FornecedorModule)
  },
  {
    path:'estoque', loadChildren: () => import("./estoque/estoque.module").then(m => m.EstoqueModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

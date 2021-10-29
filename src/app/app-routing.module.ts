import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditosComponent } from './Components/creditos/creditos.component';
import { CRUDComponent } from './components/crud/crud.component';
import { InicioComponent } from './Components/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full'
  },
  {
    path: 'Inicio',
    component: InicioComponent
  },
  {
    path: 'Crud',
    component: CRUDComponent
  },
  {
    path: 'Creditos',
    component: CreditosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


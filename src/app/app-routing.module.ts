import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {path: 'lista-usuarios', component: ListadoUsuariosComponent},
  {path: 'nuevo-usuario', component: NuevoUsuarioComponent},
  {path: 'editar-usuario', component: EditarUsuarioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'lista-usuarios'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

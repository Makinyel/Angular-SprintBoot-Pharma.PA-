import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonaComponent } from './lista-persona/lista-persona.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';

const routes: Routes = [
  {path:'personas',component:ListaPersonaComponent},
  {path:'',redirectTo:'personas',pathMatch:'full'},
  {path:'registar-persona',component:RegistrarPersonaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

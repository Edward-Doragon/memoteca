import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { ThoughtExclusionComponent } from './components/thoughts/thought-exclusion/thought-exclusion.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'listarPensamento'
  },
  {
    path: 'criarPensamento',
    component: CreateThoughtComponent
  },
  {
    path: 'listarPensamento',
    component: ListThoughtsComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ThoughtExclusionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

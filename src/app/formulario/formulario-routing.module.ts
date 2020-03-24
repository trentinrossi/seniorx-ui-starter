import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroExemploComponent } from './cadastro-exemplo/cadastro-exemplo.component';

const routes: Routes = [
    {
        path: '',
        component: CadastroExemploComponent
    }/*,
    {
        path: 'novo',
        component: CadastroComponent
    },
    {
        path: ':codigo',
        component: CadastroComponent
    }*/
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormularioRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroExemploComponent } from './cadastro-exemplo/cadastro-exemplo.component';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { SpinnerModule } from 'primeng/spinner';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BlockUIModule } from 'primeng/blockui';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PaginatorModule } from 'primeng/paginator';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SBadgeModule } from '@senior-gestao-pessoas/angular-components';
import { EmptyStateModule } from '@seniorsistemas/angular-components';
import { FormularioRoutingModule } from './formulario-routing.module';

@NgModule({
  declarations: [
    CadastroExemploComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormularioRoutingModule,

    MessagesModule,
    MessageModule,
    PanelModule,
    DropdownModule,
    FieldsetModule,
    AutoCompleteModule,
    CalendarModule,
    ButtonModule,
    SpinnerModule,
    InputTextModule,
    InputMaskModule,
    ProgressSpinnerModule,
    BlockUIModule,
    InputTextareaModule,
    DialogModule,
    FormsModule,
    PanelModule,
    AutoCompleteModule,
    CalendarModule,
    TableModule,
    ReactiveFormsModule,
    FieldsetModule,
    DropdownModule,
    InputTextareaModule,
    PaginatorModule,
    TabViewModule,
    SplitButtonModule,
    SBadgeModule,
    EmptyStateModule
  ]
})
export class FormularioModule { }

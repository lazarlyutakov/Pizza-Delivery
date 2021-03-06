import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomPizza } from './make-custom-pizza/custom-pizza.model';
import { PizzaService } from './../pizza.service';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdDialogModule } from '@angular/material';
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';
import { MakeCustomPizzaComponent } from './make-custom-pizza/make-custom-pizza.component';
import { FinalizeCustomPizzaComponent } from './finalize-custom-pizza/finalize-custom-pizza.component';
import { MakeCustomPizzaService } from './make-custom-pizza/make-custom-pizza.service';



@NgModule({
  imports: [
    CommonModule,
    PizzasRoutingModule,
    FormsModule,
    MdDialogModule,
    ToastModule.forRoot(),
  ],
  declarations: [
    PizzaComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    MakeCustomPizzaComponent,
    FinalizeCustomPizzaComponent
  ],
  entryComponents: [
    FinalizeCustomPizzaComponent,
  ],
  providers: [PizzaService, CustomPizza, MakeCustomPizzaService]
})
export class PizzasModule { }

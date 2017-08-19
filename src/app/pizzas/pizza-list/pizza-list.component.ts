import { PizzaService } from './../../pizza.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  // pizzas = [
  //   {name: 'Peperoni', price: 10},
  //   {name: 'Na gosho liubimata', price: 15}
  // ];

  pizzas: Pizza[];


  constructor(private PizzaService: PizzaService) {
    this.PizzaService.getPizzas()
      .subscribe((value) => {
        this.pizzas = value;
      });
  }

  ngOnInit() {
  }

}

interface Pizza {
  _id: string;
  name: string;
  price: number;
}

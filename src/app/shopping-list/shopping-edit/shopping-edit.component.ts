import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  constructor(
    private shoppingSvc: ShoppingService
  ) { }

  ngOnInit() {
  }

  onAddItem() {
    this.shoppingSvc.addIngredient({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    })
  }

}

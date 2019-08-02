import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import * as customerActions from "../state/customer.actions";
import * as fromCustomer from "../state/customer.reducer";
import { Customer } from "../customer.model";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromCustomer.AppState>
  ) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      address: ["", Validators.required],
      membership: ["", Validators.required],
      id: null
    })

    const customer$: Observable<Customer> = this.store.select(
      fromCustomer.getCurrentCustomer
    )

    customer$.subscribe(currentCustomer => {
      if (currentCustomer) {
        this.customerForm.patchValue({
          name: currentCustomer.name,
          phone: currentCustomer.phone,
          address: currentCustomer.address,
          membership: currentCustomer.membership,
          id: currentCustomer.id
        });
      }
    })
  }

  updateCustomer() {    
    // const updatedCustomer: Customer = {
    //   id: this.customerForm.get("id").value,
    //   name: this.customerForm.get("name").value,
    //   phone: this.customerForm.get("phone").value,
    //   address: this.customerForm.get("address").value,
    //   membership: this.customerForm.get("membership").value
    // };
    const updatedCustomer = this.customerForm.value;
    console.log(updatedCustomer);
    this.resetForm();
    this.store.dispatch(new customerActions.UpdateCustomer(updatedCustomer)); 
  }

  resetForm() {
    this.customerForm.reset();
  }

}

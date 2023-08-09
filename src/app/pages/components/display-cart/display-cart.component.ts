import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { IProducts } from '../../interfaces/products';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.css'],
})
export class DisplayCartComponent implements OnInit {
  dataSource!: IProducts[];
  displayedColumns: string[] = ['thumbnail', 'title', 'price', 'actions'];

  showMessage!: boolean;
  totalAmount: number = 0;

  addressForm: boolean = false;
  form!: FormGroup;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // produtos no carrinho
    this.productsService.products().subscribe((products: any) => {
      this.dataSource = products;

      if (this.dataSource.length == 0) {
        this.showMessage = false;
      } else {
        this.showMessage = true;
      }
    });

    // total acumulado
    this.calculateAmount();

    // form

    // this.forms = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   mobileNumber: ['', Validators.required],
    //   address: ['', Validators.required],
    // });

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  removeItemCart(item: IProducts) {
    // console.log(item);
    this.productsService.removeToCart(item);
    this.dataSource = [...this.dataSource];
  }

  removeAllItemsCart() {
    this.productsService.removeAllItemsCart();
  }

  viewProduct() {
    this.dataSource.map((item: IProducts) => {
      this.router.navigate(['/detail-product/' + item.id]);
    });
  }

  calculateAmount() {
    this.totalAmount = this.productsService.calculateAmount();
  }

  onSubmit() {
    console.log(this.form.value);
  }

  cancelForm() {
    this.addressForm = false;
    this.form.reset();
  }
}

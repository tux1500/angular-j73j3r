import { Component } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product : Product | undefined;

  constructor(private route : ActivatedRoute) {
  }

  private ngOnInit() {
    //get product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //find product corresponding to the product id
    this.product = products.find(p => p.id === productIdFromRoute);

  }

}

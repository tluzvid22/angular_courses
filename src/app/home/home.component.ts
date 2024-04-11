import { Component } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { Product, Products, RatingRateEvent } from '../../types/types';
import { ProductComponent } from '../components/product/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  totalRecords: number = 0;
  rows: number = 6;

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  onRatingChange(event: RatingRateEvent) {
    this.updateProducts(event.product);
  }

  fetchProducts(page: number, perPage: number) {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page, perPage })
      .subscribe((products: Products) => {
        this.products = products.items;
        this.totalRecords = products.total;
      });
  }

  updateProducts(product: Product) {
    const body = JSON.stringify(product);
    this.productsService.updateProducts(
      `http://localhost:3000/clothes/${product.id}`,
      {},
      body
    );
  }

  products: Product[] = [];
  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }
}

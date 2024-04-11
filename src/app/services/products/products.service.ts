import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import {
  Options,
  PaginationParams,
  Product,
  Products,
} from '../../../types/types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  //get method
  getProducts = (
    url: string,
    params: PaginationParams
  ): Observable<Products> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };

  //update method
  updateProducts = (
    url: string,
    params: Options,
    body: any
  ): Observable<Product> => {
    return this.apiService.put(url, body, params);
  };
}

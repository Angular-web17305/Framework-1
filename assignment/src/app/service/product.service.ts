import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = 'http://localhost:3000/api/products'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/api/products')
  }
  deleteProduct(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:3000/api/products/${id}`)
  }
  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/api/products/${id}`)
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`http://localhost:3000/api/products`, product)
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(`http://localhost:3000/api/products/${product._id}`, product)
  }
  getlist(_limit:number =4, search_key:any=null):Observable<Array<IProduct>>{
    let url='http://localhost:3000/api/products/?_limit='+_limit +'&_sort=id&_oder=desc'
    if(search_key != null){
      url +='&name_like='+search_key;
    }
    return this.http.get<Array<IProduct>>(url)
  }
  
}

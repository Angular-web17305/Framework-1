import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../interface/categoryes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryesService {

  constructor(private http: HttpClient) { }

  getCategorys(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://localhost:3000/api/categoryes')
  }
  deleteCategory(id: number | string): Observable<ICategory> {
    return this.http.delete<ICategory>(`http://localhost:3000/api/categoryes/${id}`)
  }
  getCategory(id: string): Observable<ICategory> {
    return this.http.get<ICategory>(`http://localhost:3000/api/categoryes/${id}`)
  }
  addCategory(product: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`http://localhost:3000/api/categoryes`, product)
  }
  updateCategory(product: ICategory): Observable<ICategory> {
    return this.http.patch<ICategory>(`http://localhost:3000/api/categoryes/${product._id}`, product)
  }
}

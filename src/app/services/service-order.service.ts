import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderStatus } from '../modals/orderStatus';


@Injectable({
  providedIn: 'root'
})
export class ServiceOrderService {

  constructor(private httpService: HttpClient) { }
  getOrderDetails(): Observable<OrderStatus[]> {
    return this.httpService.get<OrderStatus[]>('../assets/DB.json')
  }
}

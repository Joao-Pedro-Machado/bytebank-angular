import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transfer } from '../models/transfer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenceService {

  private transferList: any[]
  private url = 'http://localhost:3000/transfers'

  constructor(private httpClient: HttpClient) {
    this.transferList = []
  }

  public gettransferList() {
    return this.transferList
  }

  public addNewTransfer(transfer: Transfer): Observable<Transfer> {
    this.formatTransfer(transfer)

    return this.httpClient.post<Transfer>(this.url, transfer)
  }

  public getTransfers():Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url)
  }

  private formatTransfer(transfer: any) {
    transfer.data = new Date()
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenceService {

  private transferList: any[]

  constructor() {
    this.transferList = []
  }

  public gettransferList() {
    return this.transferList
  }

  public addNewTransfer(transfer: any) {
    this.formatTransfer(transfer)

    this.transferList.push(transfer)
  }

  private formatTransfer(transfer: any) {
    transfer.data = new Date()
  }

}

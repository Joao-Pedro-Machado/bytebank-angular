import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../models/transfer.model';
import { TransferenceService } from '../services/transference.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  transfers: Transfer[]

  constructor(private service: TransferenceService) {}

  ngOnInit(): void {
    this.service.getTransfers().subscribe((transfers: Transfer[]) => {
      console.table(transfers)
      this.transfers = transfers
    })
  }

}

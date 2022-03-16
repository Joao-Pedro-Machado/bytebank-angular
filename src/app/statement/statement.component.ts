import { Component, Input, OnInit } from '@angular/core';
import { TransferenceService } from '../services/transference.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  transfers: any[]

  constructor(private service: TransferenceService) {}

  ngOnInit(): void {
    this.transfers = this.service.gettransferList()
  }

}

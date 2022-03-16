import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transfer } from '../models/transfer.model';
import { TransferenceService } from '../services/transference.service';

@Component({
    selector: 'app-new-transference',
    templateUrl: './new-transference.component.html',
    styleUrls: [
        './new-transference.component.scss'
    ]
})
export class NewTranferenceComponent {

  @Input() value: number;
  @Input() destiny: number;

  constructor(private service: TransferenceService, private router: Router) {}

  transfer() {
    const newTransfer: Transfer = {
      value: this.value,
      destiny: this.destiny
    }

    this.service.addNewTransfer(newTransfer).subscribe(response => {
      console.log(response)
      this.clearFields()
      this.router.navigateByUrl('statement')
    },
    error => console.log(error))
  }

  clearFields() {
    this.value = null;
    this.destiny = null;
  }

}

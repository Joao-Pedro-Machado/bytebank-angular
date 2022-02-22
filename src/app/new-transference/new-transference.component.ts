import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() onTranfer = new EventEmitter<any>();

  transfer(){
    this.onTranfer.emit({
      value: this.value,
      destiny: this.destiny
    })

    this.clearFields()
  }

  clearFields(){
    this.value = null;
    this.destiny = null;
  }

}

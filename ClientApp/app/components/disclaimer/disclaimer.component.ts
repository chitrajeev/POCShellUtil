import { Component } from '@angular/core';
import { ButtonModule, DialogModule } from 'primeng/primeng';

@Component({
    selector: 'disclaimer',
    templateUrl: './disclaimer.component.html',
    styleUrls:['./disclaimer.component.css']
})
export class DisclaimerComponent {
    display: boolean = false;

    showDialog() {
        this.display = true;
    }
}
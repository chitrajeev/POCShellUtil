import { Component, OnInit } from '@angular/core';
import { DataTableModule ,ButtonModule,DialogModule,InputTextModule } from 'primeng/primeng';
import { ICar } from '../../domain/car';
import { CarService } from '../../services/carservice';

@Component({
    selector: 'submission',
    templateUrl: './submissiontable.component.html',
    providers: [CarService]
})

export class SubmissionComponent implements OnInit {

    displayDialog: boolean;

    car: ICar = new PrimeCar("", "", "", "");

    selectedCar: ICar;

    newCar: boolean;

    cars: ICar[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.GetData();
    }

    GetData():void{
        this.carService.getCarsSmall().subscribe(cars => this.cars = cars);
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar("", "", "", "");
        this.displayDialog = true;
    }

    save() {
        if (this.newCar)
            this.cars.push(this.car);
        else
            this.cars[this.findSelectedCarIndex()] = this.car;

        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        this.cars.splice(this.findSelectedCarIndex(), 1);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: ICar): ICar {
        let car = new PrimeCar("", "", "", "");
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}

class PrimeCar implements ICar {

    constructor(public vin, public year, public brand, public color) {
        this.vin = vin;
        this.year = year;
        this.brand = brand;
        this.color = color;
    }
}
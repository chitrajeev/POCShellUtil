import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ICar } from '../domain/car';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class CarService {
    url: string = "api/carsmall.json";
    constructor(private http: Http) { }

    getCarsSmall(): Observable<ICar[]> {
        return this.http.get(this.url)
            .map((res: Response) => <ICar[]>res.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
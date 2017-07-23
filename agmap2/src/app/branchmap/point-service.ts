import {Injectable} from '@angular/core';


import {Observable} from 'rxjs/observable';
import {of }  from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import { Point, points} from './data-model';


@Injectable()

export class PointService{

    delayMs=500;

    getPoints(): Observable<Point[]>{
        return of(points).delay(this.delayMs); 
    }

    updatePoint(point : Point): Observable<Point> {
        const oldPoint=points.find(p =>p.id === point.id );
        const newPoint=Object.assign(oldPoint,point);
        return of(newPoint).delay(this.delayMs);
    }

}
import {Component, Input, OnChanges } from '@angular/core';
import {Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {PointService} from './point-service';
import {Point} from './data-model';
    import {states} from './data-model';



@Component({
    selector: 'point-detail',
    templateUrl : './point-detail.component.html'
})

export class PointDetailComponent  {

   @Input() point : Point; 
    pointForm: FormGroup;   
    states = states;

    constructor(private fb: FormBuilder, private pointService: PointService){
        this.createForm();
    }


    createForm(){
        this.pointForm = this.fb.group({
            id: '',
            lat: 0,
            lng : 0,
            jobid: '',
            datetime:'',
            address: '',
            eircode: '',
            branch: '',
            branchId: '',
            iconUrl: 'assets/van.png',
            card : '' ,
            confirmed: false
         });
    }

    ngOnChanges(){
        this.pointForm.reset({
            id: this.point.id,
            lat: this.point.lat,
            lng: this.point.lng,
            jobid: this.point.jobid,
            datetime: this.point.datetime,
            address:this.point.address,
            eircode: this.point.eircode,
            branch:this.point.branch,
            branchId: this.point.branchId,
            iconUrl: this.point.iconUrl,
            card: this.point.card,
            confirmed: this.point.confirmed
        })

    };

    onSubmit(){
        this.pointService.updatePoint(this.point).subscribe;
        this.ngOnChanges;
    }

    revert(){
        this.ngOnChanges;
    }

 }

    


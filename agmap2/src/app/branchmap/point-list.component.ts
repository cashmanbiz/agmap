import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/finally';
import { LatLngLiteral } from '@agm/core';
import { Point } from './data-model';
import {points} from './data-model';

import { PointService} from './point-service'



@Component({
  selector: 'point-list',
  templateUrl: './point-list.component.html',
  styleUrls: ['./point-list.component.css']
})

export class PointListComponent implements OnInit { 

    points: Observable<Point[]>;

    isLoading = false;
    selectedPoint : Point;
 //   jobPoint : Point;
      

// Map initial center corordinates
  lat: number = 53.296841;
  lng : number = -6.948193;

    jobpoints: Point[]=[
        {
        id : 7,
        lat: 0,
        lng : 0,
        jobid: "",
        datetime: "",
        address: "",
        eircode: "",
        branch: "",
        branchId: "",
        iconUrl: "",
        card : 'CARD1',
        confirmed : false

    },
      {
        id : 8,
        lat: 0,
        lng : 0,
        jobid: "",
        datetime: "",
        address: "",
        eircode: "",
        branch: "",
        branchId: "",
        iconUrl: "",
        card : 'CARD1',
        confirmed : false

    }
    ];



//AG Map Properties
  zoom: number = 7;
  strokeColor: string = "blue";
  strokeWeight: number =1;
  clickable: boolean=false;
  fillColor: "red";
  fillOpacity: number=0.4;
  geodesic: boolean=true;
  visible: boolean=true;
  polyDraggable: boolean=false;

  //AG Branch Area Colours and Opacity

  fillColorDublin : string= "black";
  fillColorDundalk : string= "blue";
  fillColorWaterford : string= "orange";
  fillColorCork : string= "lime";
  fillColorKerry : string= "sienna";
  fillColorLimerick : string= "gray";
  fillColorGalway : string= "red";
  fillColorKilkenny : string= "brown";
  fillColorSligo : string= "purple";
  fillColorLetterkenny : string= "yellow";
  fillColorAthlone : string= "pink";
  fillColorKildare : string= "white";
  fillOpacityKilkenny: number=.7;
  strokeColorKildare: string = "blue";
  strokeWeightKildare: number=.7;
  fillOpacityKildare: number=.3;
  visibleKildare: boolean=true;
  geodesicKildare: boolean=true;
  polyDraggableKildare: boolean=true;

  myPoint : Point;



    constructor(private pointService : PointService){  
     }

    ngOnInit(){
        this.getPoints();
        this.myPoint = points[2];
            
    }

    getPoints(){
        
        this.isLoading=true;
        this.points=this.pointService.getPoints()
            .finally(()=>this.isLoading=false);

        this.selectedPoint=undefined;        


      //  this.points.forEach(function(item, index, array) {
      //      console.log(item,index);
      //  });

        //this.myPoint.id=9;
        //this.points[0].lat;//find(p =>p.id === point.id );
     //   console.log(this.myPoint.lat + " \n"+JSON.stringify(this.points));
        
        //this.jobpoints[0]=this.points[0]; 
       // this.jobpoints[1]=this.points[1];
        //this.jobpoints[1].jobid="JOB0000300";
        

    }

    select(point: Point) {
        this.selectedPoint=point;
        this.jobpoints[1]=this.selectedPoint;
        //this.jobpoints[2]=this.selectedPoint;
    }


I21Kildare: Array<LatLngLiteral> =[
{ lat: 53.296841, lng: -6.948193 },
{ lat: 53.295478, lng: -6.586304 },
{ lat: 52.93681, lng: -6.838014 },
{ lat: 53.098741, lng: -7.445325 }
]
I10DublinHub: Array<LatLngLiteral> =[
{ lat: 52.734634, lng: -6.143801 },
{ lat: 52.739618, lng: -6.138611 },
{ lat: 52.857937, lng: -6.057587 },
{ lat: 52.964770, lng: -5.997162 },
{ lat: 52.982550, lng: -6.028061 },
{ lat: 53.072577, lng: -6.033554 },
{ lat: 53.147594, lng: -6.039047 },
{ lat: 53.274247, lng: -6.080246 },
{ lat: 53.377594, lng: -6.036987 },
{ lat: 53.497033, lng: -5.991669 },
{ lat: 53.588429, lng: -6.065826 },
{ lat: 53.632018, lng: -6.185989 },
{ lat: 53.634785, lng: -6.215907 },
{ lat: 53.515838, lng: -6.784775 },
{ lat: 53.517037, lng: -6.944741 },
{ lat: 53.296841, lng: -6.948193 },
{ lat: 53.295478, lng: -6.586304 },
{ lat: 52.93681, lng: -6.838014 },
{ lat: 52.792812, lng: -6.322995 }
]
I09Dundalk: Array<LatLngLiteral> =[
{ lat: 53.634785, lng: -6.215907 },
{ lat: 53.515838, lng: -6.784775 },
{ lat: 53.517037, lng: -6.944741 },
{ lat: 54.078229, lng: -7.641321 },
{ lat: 54.135087, lng: -7.511902 },
{ lat: 54.159218, lng: -7.447357 },
{ lat: 54.152784, lng: -7.386932 },
{ lat: 54.146350, lng: -7.358093 },
{ lat: 54.175297, lng: -7.310028 },
{ lat: 54.191370, lng: -7.266083 },
{ lat: 54.219482, lng: -7.249603 },
{ lat: 54.233130, lng: -7.200165 },
{ lat: 54.257203, lng: -7.161713 },
{ lat: 54.274046, lng: -7.191925 },
{ lat: 54.300499, lng: -7.222137 },
{ lat: 54.340548, lng: -7.194672 },
{ lat: 54.346952, lng: -7.158966 },
{ lat: 54.361358, lng: -7.119141 },
{ lat: 54.379758, lng: -7.109528 },
{ lat: 54.424523, lng: -7.038116 },
{ lat: 54.425322, lng: -7.016144 },
{ lat: 54.409340, lng: -6.966705 },
{ lat: 54.363758, lng: -6.889801 },
{ lat: 54.318125, lng: -6.854095 },
{ lat: 54.290080, lng: -6.843109 },
{ lat: 54.274848, lng: -6.856842 },
{ lat: 54.268432, lng: -6.815643 },
{ lat: 54.233130, lng: -6.807404 },
{ lat: 54.194583, lng: -6.735992 },
{ lat: 54.204223, lng: -6.703033 },
{ lat: 54.203420, lng: -6.672821 },
{ lat: 54.188155, lng: -6.642609 },
{ lat: 54.159218, lng: -6.620636 },
{ lat: 54.110943, lng: -6.639862 },
{ lat: 54.083562, lng: -6.648102 },
{ lat: 54.067448, lng: -6.659088 },
{ lat: 54.049714, lng: -6.626129 },
{ lat: 54.052939, lng: -6.609650 },
{ lat: 54.062612, lng: -6.591797 },
{ lat: 54.061806, lng: -6.565704 },
{ lat: 54.069059, lng: -6.497040 },
{ lat: 54.078729, lng: -6.486053 },
{ lat: 54.080340, lng: -6.458588 },
{ lat: 54.072283, lng: -6.439362 },
{ lat: 54.075506, lng: -6.399536 },
{ lat: 54.081951, lng: -6.373444 },
{ lat: 54.110943, lng: -6.376190 },
{ lat: 54.122212, lng: -6.367950 },
{ lat: 54.120602, lng: -6.350098 },
{ lat: 54.118993, lng: -6.332245 },
{ lat: 54.107723, lng: -6.329498 },
{ lat: 54.110138, lng: -6.313019 },
{ lat: 54.116578, lng: -6.300659 },
{ lat: 54.120602, lng: -6.280060 },
{ lat: 54.101281, lng: -6.255341 },
{ lat: 54.059388, lng: -6.196289 },
{ lat: 54.033586, lng: -6.130371 },
{ lat: 54.000505, lng: -6.093292 },
{ lat: 53.986780, lng: -6.120758 },
{ lat: 53.972243, lng: -6.163330 },
{ lat: 53.980320, lng: -6.244354 },
{ lat: 53.994854, lng: -6.299286 },
{ lat: 54.004540, lng: -6.334991 },
{ lat: 53.959318, lng: -6.354218 },
{ lat: 53.919707, lng: -6.362457 },
{ lat: 53.891391, lng: -6.329498 },
{ lat: 53.881679, lng: -6.277313 },
{ lat: 53.867915, lng: -6.234741 },
{ lat: 53.854957, lng: -6.234741 },
{ lat: 53.813626, lng: -6.252594 },
{ lat: 53.800651, lng: -6.208649 },
{ lat: 53.782804, lng: -6.219635 },
{ lat: 53.771442, lng: -6.236115 },
{ lat: 53.719466, lng: -6.241608 },
{ lat: 53.692641, lng: -6.236115 },
{ lat: 53.638125, lng: -6.214142 }
]
I04Waterford: Array<LatLngLiteral> =[
{ lat: 51.973884, lng: -7.697296 },
{ lat: 52.345324, lng: -7.809384 },
{ lat: 52.485289, lng: -7.783813 },
{ lat: 52.476098, lng: -6.850676 },
{ lat: 52.792812, lng: -6.322995 },
{ lat: 52.734634, lng: -6.143801 },
{ lat: 52.739618, lng: -6.138611 },
{ lat: 52.566334, lng: -6.160583 },
{ lat: 52.499504, lng: -6.212769 },
{ lat: 52.328625, lng: -6.336365 },
{ lat: 52.264796, lng: -6.248474 },
{ lat: 52.163824, lng: -6.237488 },
{ lat: 52.140231, lng: -6.525879 },
{ lat: 52.108192, lng: -6.589050 },
{ lat: 52.096382, lng: -6.652222 },
{ lat: 52.121685, lng: -6.646729 },
{ lat: 52.163824, lng: -6.624756 },
{ lat: 52.190772, lng: -6.668701 },
{ lat: 52.190772, lng: -6.764832 },
{ lat: 52.123371, lng: -6.904907 },
{ lat: 52.123371, lng: -7.031250 },
{ lat: 52.130116, lng: -7.171326 },
{ lat: 52.089633, lng: -7.503662 },
{ lat: 52.054179, lng: -7.525635 },
{ lat: 52.008555, lng: -7.564087 },
{ lat: 51.975497, lng: -7.600779 }
]
I05Cork: Array<LatLngLiteral> =[	
{ lat: 51.973884, lng: -7.697296 },
{ lat: 52.345324, lng: -7.809384 },
{ lat: 52.337697, lng: -8.951042 },
{ lat: 51.955793, lng: -9.212105 },
{ lat: 51.785199, lng: -9.825499 },
{ lat: 51.622280, lng: -10.387823 },
{ lat: 51.421477, lng: -9.909668 },
{ lat: 51.394065, lng: -9.459229 },
{ lat: 51.606077, lng: -8.467712 },
{ lat: 51.942572, lng: -7.690430 }
]
I17KerryMobilePro: Array<LatLngLiteral> =[
{ lat: 52.605550, lng: -9.349365 },
{ lat: 52.596375, lng: -9.472961 },
{ lat: 52.598877, lng: -9.588318 },
{ lat: 52.592204, lng: -9.659729 },
{ lat: 52.573012, lng: -9.684448 },
{ lat: 52.452662, lng: -10.036011 },
{ lat: 52.355474, lng: -10.014038 },
{ lat: 52.342052, lng: -10.228271 },
{ lat: 52.261434, lng: -10.453491 },
{ lat: 52.187405, lng: -10.579834 },
{ lat: 52.172754, lng: -10.769272 },
{ lat: 52.028218, lng: -10.710820 },
{ lat: 52.093008, lng: -10.167847 },
{ lat: 52.059246, lng: -10.162354 },
{ lat: 51.961192, lng: -10.524902 },
{ lat: 51.828988, lng: -10.502930 },
{ lat: 51.757640, lng: -10.612080 },
{ lat: 51.622280, lng: -10.387823 },
{ lat: 51.785199, lng: -9.825499 },
{ lat: 51.955793, lng: -9.212105 },
{ lat: 52.337697, lng: -8.951042 },
{ lat: 52.593755, lng: -9.227802 },
{ lat: 52.596583, lng: -9.227743 },
{ lat: 52.605550, lng: -9.244995 },
{ lat: 52.575515, lng: -9.312973 }
]
I07Limerick: Array<LatLngLiteral> =[
{ lat: 52.605550, lng: -9.349365 },
{ lat: 52.596375, lng: -9.472961 },
{ lat: 52.598877, lng: -9.588318 },
{ lat: 52.592204, lng: -9.659729 },
{ lat: 52.573012, lng: -9.684448 },
{ lat: 52.550471, lng: -9.957733 },
{ lat: 52.628895, lng: -9.856110 },
{ lat: 52.719658, lng: -9.683075 },
{ lat: 52.908902, lng: -9.483948 },
{ lat: 52.976349, lng: -9.569092 },
{ lat: 53.088137, lng: -9.326361 },
{ lat: 52.977104, lng: -8.321622 },
{ lat: 53.056852, lng: -8.252823 },
{ lat: 53.100621, lng: -8.206787 },
{ lat: 53.072066, lng: -8.078357 },
{ lat: 53.018433, lng: -7.702232 },
{ lat: 52.485289, lng: -7.783813 },
{ lat: 52.345324, lng: -7.809384 },
{ lat: 52.337697, lng: -8.951042 },
{ lat: 52.593755, lng: -9.227802 },
{ lat: 52.596583, lng: -9.227743 },
{ lat: 52.605550, lng: -9.244995 },
{ lat: 52.575515, lng: -9.312973 }
]
I06Galway: Array<LatLngLiteral> =[
{ lat: 53.072066, lng: -8.078357 },
{ lat: 53.837233, lng: -8.305087 },
{ lat: 54.047795, lng: -9.908954 },
{ lat: 54.017452, lng: -10.324402 },
{ lat: 53.842805, lng: -10.046997 },
{ lat: 53.605544, lng: -10.338135 },
{ lat: 53.399707, lng: -10.247498 },
{ lat: 53.238921, lng: -9.854736 },
{ lat: 53.202742, lng: -9.700928 },
{ lat: 53.190402, lng: -9.834137 },
{ lat: 53.145947, lng: -9.900055 },
{ lat: 52.976349, lng: -9.569092 },
{ lat: 53.088137, lng: -9.326361 },
{ lat: 52.977104, lng: -8.321622 },
{ lat: 53.056852, lng: -8.252823 },
{ lat: 53.100621, lng: -8.206787 }
]
I14Kilkenny: Array<LatLngLiteral> =[
{ lat: 52.485289, lng: -7.783813 },
{ lat: 52.476098, lng: -6.850676 },
{ lat: 52.792812, lng: -6.322995 },
{ lat: 52.93681, lng: -6.838014 },
{ lat: 53.098741, lng: -7.445325 },
{ lat: 53.018433, lng: -7.702232 }
]
I03Athlone: Array<LatLngLiteral> =[
{ lat: 53.072066, lng: -8.078357 },
{ lat: 53.018433, lng: -7.702232 },
{ lat: 53.098741, lng: -7.445325 },
{ lat: 53.296841, lng: -6.948193 },
{ lat: 53.517037, lng: -6.944741 },
{ lat: 54.078229, lng: -7.641321 },
{ lat: 53.837233, lng: -8.305087 }
]
I18SligoMobilePro: Array<LatLngLiteral> =[
{ lat: 54.135087, lng: -7.511902 },
{ lat: 54.189763, lng: -7.646484 },
{ lat: 54.213861, lng: -7.684937 },
{ lat: 54.221891, lng: -7.789307 },
{ lat: 54.234735, lng: -7.844238 },
{ lat: 54.314921, lng: -7.855225 },
{ lat: 54.487591, lng: -8.039246 },
{ lat: 54.468741, lng: -8.113232 },
{ lat: 54.465205, lng: -8.175497 },
{ lat: 54.473944, lng: -8.330383 },
{ lat: 54.509921, lng: -8.385315 },
{ lat: 54.452477, lng: -8.703918 },
{ lat: 54.329338, lng: -8.728638 },
{ lat: 54.311717, lng: -9.121399 },
{ lat: 54.350154, lng: -9.319153 },
{ lat: 54.374158, lng: -9.802551 },
{ lat: 54.350154, lng: -9.997559 },
{ lat: 54.250785, lng: -10.222778 },
{ lat: 54.123822, lng: -10.327148 },
{ lat: 54.022293, lng: -10.327148 },
{ lat: 54.017452, lng: -10.324402 },
{ lat: 54.047795, lng: -9.908954 },
{ lat: 53.837233, lng: -8.305087 },
{ lat: 54.078229, lng: -7.641321 },
{ lat: 54.131370, lng: -7.521254 }
]
I19Letterkenny: Array<LatLngLiteral> =[
{ lat: 54.473944, lng: -8.330383 },
{ lat: 54.465205, lng: -8.175497 },
{ lat: 54.468741, lng: -8.113232 },
{ lat: 54.487591, lng: -8.039246 },
{ lat: 54.538613, lng: -8.004913 },
{ lat: 54.541800, lng: -7.973328 },
{ lat: 54.533036, lng: -7.955475 },
{ lat: 54.530645, lng: -7.934875 },
{ lat: 54.533833, lng: -7.862091 },
{ lat: 54.529848, lng: -7.841492 },
{ lat: 54.547376, lng: -7.814026 },
{ lat: 54.558526, lng: -7.816772 },
{ lat: 54.584001, lng: -7.759094 },
{ lat: 54.608664, lng: -7.693176 },
{ lat: 54.622183, lng: -7.687683 },
{ lat: 54.640466, lng: -7.698669 },
{ lat: 54.642850, lng: -7.715149 },
{ lat: 54.628543, lng: -7.748108 },
{ lat: 54.646823, lng: -7.803040 },
{ lat: 54.651591, lng: -7.819519 },
{ lat: 54.642055, lng: -7.834625 },
{ lat: 54.668272, lng: -7.884064 },
{ lat: 54.694472, lng: -7.885437 },
{ lat: 54.720655, lng: -7.833252 },
{ lat: 54.701614, lng: -7.753601 },
{ lat: 54.700027, lng: -7.739868 },
{ lat: 54.738893, lng: -7.632751 },
{ lat: 54.738893, lng: -7.544861 },
{ lat: 54.746028, lng: -7.520142 },
{ lat: 54.790393, lng: -7.533875 },
{ lat: 54.822052, lng: -7.477570 },
{ lat: 54.871866, lng: -7.439117 },
{ lat: 54.903461, lng: -7.439117 },
{ lat: 54.932665, lng: -7.437744 },
{ lat: 54.945287, lng: -7.389679 },
{ lat: 54.983130, lng: -7.391052 },
{ lat: 55.009914, lng: -7.385559 },
{ lat: 55.043762, lng: -7.345734 },
{ lat: 55.043762, lng: -7.308655 },
{ lat: 55.053989, lng: -7.272949 },
{ lat: 55.081512, lng: -7.224884 },
{ lat: 55.196900, lng: -6.983185 },
{ lat: 55.233722, lng: -6.902161 },
{ lat: 55.269728, lng: -6.968079 },
{ lat: 55.353355, lng: -7.176819 },
{ lat: 55.393932, lng: -7.395172 },
{ lat: 55.383011, lng: -7.414398 },
{ lat: 55.316643, lng: -7.402039 },
{ lat: 55.234505, lng: -8.125763 },
{ lat: 55.287719, lng: -8.249359 },
{ lat: 55.195332, lng: -8.342743 },
{ lat: 55.007551, lng: -8.606415 },
{ lat: 54.784850, lng: -8.806915 },
{ lat: 54.682565, lng: -8.867340 },
{ lat: 54.625363, lng: -8.826141 },
{ lat: 54.568877, lng: -8.567963 },
{ lat: 54.567285, lng: -8.418274 },
{ lat: 54.551359, lng: -8.238373 }
]


}

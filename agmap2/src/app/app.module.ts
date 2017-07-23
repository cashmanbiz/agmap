import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
//import { AgBranchComponent } from './ag-branch/ag-branch.component';
import { BranchmapComponent } from './branchmap/branchmap.component';
import { ReactiveFormsModule } from '@angular/forms' ;
import { PointDetailComponent } from './branchmap/point-detail.component';
import { PointListComponent} from './branchmap/point-list.component';
import { PointService} from './branchmap/point-service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyABbl9TmGHUoD_xncW7MJfkKrckMcry_DA'
    })
  ],
  providers: [PointService],
  declarations : [ AppComponent, BranchmapComponent, PointDetailComponent, PointListComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {}

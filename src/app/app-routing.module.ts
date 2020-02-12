import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailComponent } from './retail/retail.component';
import { RetailoneComponent } from './retail/retailone/retailone.component';
import { RetailtwoComponent } from './retail/retailtwo/retailtwo.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { MfgoneComponent } from './manufacturing/mfgone/mfgone.component';
import { MfgtwoComponent } from './manufacturing/mfgtwo/mfgtwo.component';
import { MfgthreeComponent } from './manufacturing/mfgthree/mfgthree.component';
import { MonitorComponent } from './monitor/monitor.component';
import { NfcreaderComponent } from './monitor/nfcreader/nfcreader.component';
import { AiereaderComponent } from './monitor/aiereader/aiereader.component';


// import * as rounting from '../app/routes'

const routes: Routes = [ 
  // { path: "", redirectTo: "/home", pathMatch: "full" },
  // {
  //     path: "retail-1",
  //     loadChildren: "retail-1"
  // },
  // {
  //     path: "retail-2",
  //     loadChildren: "./search/search.module#SearchModule"
  // },
  { path: '', component:  RetailComponent },

  { path: 'retail-1',component: RetailoneComponent },
  { path: 'retail-2',component: RetailtwoComponent },
  { path: 'mfg',component: ManufacturingComponent },
  { path: 'mfg-1', component: MfgoneComponent},
  { path: 'mfg-2', component: MfgtwoComponent}, 
  { path:'mfg-3',component: MfgthreeComponent }, 
  { path: 'monitor',component: MonitorComponent },
  { path: 'nfc', component:NfcreaderComponent},  
  { path: 'aie', component: AiereaderComponent},
  // { path: 'blog', component: BlogComponent},
  // { path: 'contact', component: ContactComponent},
  // { path: 'profile/:id', component:  ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

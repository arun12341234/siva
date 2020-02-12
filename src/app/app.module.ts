import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './nevigation/header/header.component';
import { SidenavListComponent } from './nevigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './nevigation/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './material/material.module';
//////////////////material///////////////
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatListModule} from '@angular/material/list';
import { from } from 'rxjs';
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
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
//////////////////////////////////////////

/////////////////////////chart///////////////////////
import { ChartsModule } from 'ng2-charts';
/////////////////////////////////////////////////
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    FooterComponent,
    RetailComponent,
    RetailoneComponent,
    RetailtwoComponent,
    ManufacturingComponent,
    MfgoneComponent,
    MfgtwoComponent,
    MfgthreeComponent,
    MonitorComponent,
    NfcreaderComponent,
    AiereaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MaterialModule
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    ChartsModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

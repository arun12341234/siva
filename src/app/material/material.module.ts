import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatListModule,MatIconModule, MatButtonModule,MatTabsModule, MatSidenavModule, MatToolbarModule,MatCardModule,MatFormFieldModule,MatChipsModule } from '@angular/material';


// import {  MatMenuModule } from '@angular/material';
// import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import {MatNativeDateModule,MatDatepickerModule,MatCheckboxModule, MatInputModule,MatRadioModule} from  '@angular/material';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
// import { MatTableModule } from '@angular/material' ;
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatBadgeModule,
    CommonModule,
    MatSelectModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    // MatTabsModule, 
    // MatSidenavModule, 
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule,
    // MatListModule,
    // MatMenuModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatNativeDateModule,MatDatepickerModule,MatCheckboxModule, MatInputModule,MatRadioModule,
    FormsModule, ReactiveFormsModule,
    MatGridListModule,
    // MatChipsModule,
    // MatTableModule,
    // MatBottomSheet, MatBottomSheetRef,
    MatBottomSheetModule,
  ]
})
export class MaterialModule { }

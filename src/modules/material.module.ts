import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Angular Material Module Component Imports
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCommonModule, MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    DragDropModule, ReactiveFormsModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatCommonModule,
    MatNativeDateModule, MatRippleModule, MatDatepickerModule, MatDividerModule, MatGridListModule,
    MatIconModule, MatPaginatorModule, MatSidenavModule, MatSnackBarModule, MatSortModule, MatStepperModule,
    MatTableModule, MatToolbarModule, MatTreeModule, MatChipsModule, MatExpansionModule,
    MatCardModule,MatDialogModule,
    MatIconModule, MatButtonModule, MatInputModule, MatListModule

  ]
})
export class MaterialModule { }

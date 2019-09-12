import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FerSystemComponent } from './fer-system.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FerSystemComponent }])
  ],
  declarations: [FerSystemComponent]
})
export class FerSystemModule { }

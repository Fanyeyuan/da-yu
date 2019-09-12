import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IrrSystemComponent } from './irr-system.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: IrrSystemComponent }])
  ],
  declarations: [IrrSystemComponent]
})
export class IrrSystemModule { }

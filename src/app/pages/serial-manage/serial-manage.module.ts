import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerialManageComponent } from './serial-manage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SerialManageComponent }])
  ],
  declarations: [SerialManageComponent]
})
export class SerialManageModule { }

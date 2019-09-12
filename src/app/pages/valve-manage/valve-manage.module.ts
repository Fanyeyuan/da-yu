import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValveManageComponent } from './valve-manage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ValveManageComponent }])
  ],
  declarations: [ValveManageComponent]
})
export class ValveManageModule { }

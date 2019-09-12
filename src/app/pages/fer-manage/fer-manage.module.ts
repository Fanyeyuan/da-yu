import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FerManageComponent } from './fer-manage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FerManageComponent }])
  ],
  declarations: [FerManageComponent]
})
export class FerManageModule { }

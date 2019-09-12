import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemSettingComponent } from './system-setting.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SystemSettingComponent }])
  ],
  declarations: [SystemSettingComponent]
})
export class SystemSettingModule { }

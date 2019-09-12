import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceManageComponent } from './device-manage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DeviceManageComponent }])
  ],
  declarations: [DeviceManageComponent]
})
export class DeviceManageModule { }

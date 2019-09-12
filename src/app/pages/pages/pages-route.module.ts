import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../Homepage/Homepage.module#HomepageModule'
          }
        ]
      },
      {
        path: 'deviceManage',
        children: [
          {
            path: '',
            loadChildren: '../device-manage/device-manage.module#DeviceManageModule'
          }
        ]
      },
      {
        path: 'fertilizerSystem',
        children: [
          {
            path: '',
            loadChildren: '../fer-system/fer-system.module#FerSystemModule'
          }
        ]
      },
      {
        path: 'IrrigationManage',
        children: [
          {
            path: '',
            loadChildren: '../irr-manage/irr-manage.module#IrrManageModule'
          }
        ]
      },
      {
        path: 'IrrigationSystem',
        children: [
          {
            path: '',
            loadChildren: '../irr-system/irr-system.module#IrrSystemModule'
          }
        ]
      },
      {
        path: 'systemSetting',
        children: [
          {
            path: '',
            loadChildren: '../system-setting/system-setting.module#SystemSettingModule'
          }
        ]
      },
      {
        path: 'ferManage',
        children: [
          {
            path: '',
            loadChildren: '../fer-manage/fer-manage.module#FerManageModule'
          }
        ]
      },
      {
        path: 'valveManage',
        children: [
          {
            path: '',
            loadChildren: '../valve-manage/valve-manage.module#ValveManageModule'
          }
        ]
      },
      {
        path: 'serialManage',
        children: [
          {
            path: '',
            loadChildren: '../serial-manage/serial-manage.module#SerialManageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

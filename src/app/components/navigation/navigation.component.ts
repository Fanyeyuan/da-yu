import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  pages = [
    { name: '首页', path: '/pages/home', childShow: true, children: [] },
    { name: '灌区管理', path: '/pages/IrrigationManage', childShow: true, children: [] },
    {
      name: '设备管理', path: '/pages/deviceManage',
      childShow: true,
      children: [
        { name: '阀门管理', path: '/pages/ferManage' },
        { name: '施肥机管理', path: '/pages/valveManage' },
        { name: '串口设置', path: '/pages/serialManage' }]
    },
    { name: '灌溉制度', path: '/pages/IrrigationSystem', childShow: true, children: [] },
    { name: '施肥制度', path: '/pages/fertilizerSystem', childShow: true, children: [] },
    { name: '系统设置', path: '/pages/systemSetting', childShow: true, children: [] }
  ];
  pageActive: number;

  constructor() {
    this.pageActive = 0;
  }

  ngOnInit() {
  }

}

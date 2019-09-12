import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-route.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NavigationComponent } from '../../components/navigation/navigation.component'

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [PagesComponent, NavigationComponent]
})
export class PagesModule { }

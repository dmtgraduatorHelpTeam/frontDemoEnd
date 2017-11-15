import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { AppComponent } from './app.component';

import { InterceptorService } from './share/interceptor.service';

import { XHRBackend,RequestOptions } from '@angular/http';

export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions){
  let service = new InterceptorService(xhrBackend, requestOptions);
  return service;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // 以下设置，访问angular站点会自动在根节点后面加一个#锚点，解决刷新报404错误
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: InterceptorService,
     useFactory: interceptorFactory,
     deps: [XHRBackend, RequestOptions]}],
  bootstrap: [AppComponent]
})
export class AppModule { }

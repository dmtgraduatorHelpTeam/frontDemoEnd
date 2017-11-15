import { Injectable } from '@angular/core';
import { Http, Request, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InterceptorService extends Http {

  status = {
    'status.400': '错误的请求。由于语法错误，该请求无法完成。',
    'status.401': '未经授权。服务器拒绝响应。',
    'status.403': '已禁止。服务器拒绝响应。',
    'status.404': '未找到。无法找到请求的位置。',
    'status.405': '方法不被允许。使用该位置不支持的请求方法进行了请求。',
    'status.406': '不可接受。服务器只生成客户端不接受的响应。',
    'status.407': '需要代理身份验证。客户端必须先使用代理对自身进行身份验证。',
    'status.408': '请求超时。等待请求的服务器超时。',
    'status.409': '冲突。由于请求中的冲突，无法完成该请求。',
    'status.410': '过期。请求页不再可用。',
    'status.411': '长度必需。未定义“内容长度”。',
    'status.412': '前提条件不满足。请求中给定的前提条件由服务器评估为 false。',
    'status.413': '请求实体太大。服务器不会接受请求，因为请求实体太大。',
    'status.414': '请求 URI 太长。服务器不会接受该请求，因为 URL 太长。',
    'status.415': '不支持的媒体类型。服务器不会接受该请求，因为媒体类型不受支持。',
    'status.416': 'HTTP 状态代码 {0}',
    'status.500': '内部服务器错误。',
    'status.501': '未实现。服务器不识别该请求方法，或者服务器没有能力完成请求。',
    'status.503': '服务不可用。服务器当前不可用(过载或故障)。'
  };

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }
  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    // 根据不同的生产环境配置http前缀
    console.log(url);

    if (typeof url == 'string') {
      let str = url.substring(0, url.indexOf('/'));
      console.log(str);
      switch (str) {
        // 云平台
        case 'itooCloud-web':
        url =  url.replace('itooCloud-web', 'http://192.168.22.202:8080/itooCloud-web');
        // 权限
        case 'authorityManagement-web':
          url = url.replace('authorityManagement-web', 'http://192.168.22.202:8080/authorityManagement-web');
        // 基础
          case 'basicInfo-web':
          url = url.replace('basicInfo-web', 'http://192.168.22.202:8080/basicInfo-web');
        // 单表
          case 'singleTableMaintain-web':
          url = url.replace('singleTableMaintain-web', 'http://192.168.22.202:8080/singleTableMaintain-web');
        break;
        // 教学
          case 'teachingManagement-web':
          url = url.replace('teachingManagement-web', 'http://192.168.22.202:8080/teachingManagement-web');
        break;
        // 考评
          case 'examinationEvaluation-web':
          url = url.replace('examinationEvaluation-web', 'http://192.168.22.202:8080/examinationEvaluation-web');
        break;
        // 成绩
          case 'achievement-web':
          url = url.replace('achievement-web', 'http://192.168.22.202:8080/achievement-web');
        break;

      }

    } else {
      const str = url.url.substring(0, url.url.indexOf('/'));
      console.log(str);
      switch (str) {
        // 云平台
        case 'itooCloud-web': //
        url.url =  url.url.replace('itooCloud-web', 'http://192.168.22.202:8080/itooCloud-web');
        break;
        // 权限
        case 'authorityManagement-web':
          url.url = url.url.replace('authorityManagement-web', 'http://192.168.22.202:8080/authorityManagement-web');
        break;
        // 基础
          case 'basicInfo-web':
          url.url = url.url.replace('basicInfo-web', 'http://192.168.22.202:8080/basicInfo-web');
        break;
        // 单表
          case 'singleTableMaintain-web':
          url.url = url.url.replace('singleTableMaintain-web', 'http://192.168.22.202:8080/singleTableMaintain-web');
        break;
        // 教学
          case 'teachingManagement-web':
          url.url = url.url.replace('teachingManagement-web', 'http://192.168.22.202:8080/teachingManagement-web');
        break;
        // 考评
          case 'examinationEvaluation-web':
          url.url = url.url.replace('examinationEvaluation-web', 'http://192.168.22.202:8080/examinationEvaluation-web');
        break;
        // 成绩
          case 'achievement-web':
          url.url = url.url.replace('achievement-web', 'http://192.168.22.202:8080/achievement-web');
        break;
      }
    }

     // 单一替换ip+端口
    // typeof url == 'string' ?
    //   (url = 'http://192.168.22.202:8080' + url) : (url.url = 'http://192.168.22.202:8080' + url.url);

    return this.intercept(super.request(url, options));
  }
  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.get(url, options));
  }
  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
  }
  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
  }
  delete(url: string, obj?: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.delete(url, this.getRequestOptionArgs(options, obj)));
  }
  getRequestOptionArgs(options?: RequestOptionsArgs, obj?: any): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers = new Headers({'Content-Type':'application/json'});
     options =
    (
     {
       headers: options.headers,
       body: obj
     }
   );
    return options;
  }
  intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((err, source) => {
      if (err.status < 200 || err.status >= 300) {
        console.log('网络错误:' + err.status + ' - ' + this.status['status.' + err.status]);
        return Observable.empty();
      } else {
        return Observable.throw(err);
      }
    });
  }
}

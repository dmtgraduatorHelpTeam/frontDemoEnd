/*
 *作者：马金兴
 *时间：2017年7月11日15:45:25
 *功能说明：所有一级服务的路由，获得资源
 */

/*主页*/
import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes = [
  {
       path: '',
       component: WorkspaceComponent,
        children: [
        // 默认路由
         { path: '', redirectTo: '', pathMatch: 'full' }
  ]
  }
];

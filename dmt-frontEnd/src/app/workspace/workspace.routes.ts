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
         { path: '', redirectTo: '', pathMatch: 'full' },
         /********************************************************************* */
         // 添加通知
         {path: 'add-inform', loadChildren: './add-inform/add-inform.module#AddInformModule' },
         // 添加个人信息：包括个人信息、公司、薪资、家乡、家庭信息
         { path: 'add-person-info', loadChildren: './add-person-info/add-person-info.module#AddPersonInfoModule' },
         // 添加技术点
         { path: 'add-technology', loadChildren: './add-technology/add-technology.module#AddTechnologyModule' },
         // 论坛
         { path: 'forum', loadChildren: './forum/forum.module#ForumModule' },
         /******************************************************************** */
         // 我的通知
         { path: 'my-inform', loadChildren: './my-inform/my-inform/my-inform.module#MyInformModule' },
         // 查询个人信息：包括个人信息、公司、薪资、家乡、家庭信息
         { path: 'search-person-info', loadChildren: './search-person-info/search-person-info.module#SearchPersonInfoModule' },
         // 地域分布查询
         { path: 'search-region', loadChildren:
           './search-region/search-region.module#SearchRegionModule' },
        //查询薪资学历信息
         { path: 'search-salary-education-info', loadChildren: './search-salary-education-info/search-salary-education-info.module#SearchSalaryEducationInfoModule' }
 ]}
];

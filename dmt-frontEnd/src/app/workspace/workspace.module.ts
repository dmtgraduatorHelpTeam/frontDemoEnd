import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { RouterModule } from '@angular/router';
import { workspaceRoutes } from './workspace.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(workspaceRoutes) //路由模块
  ],
  declarations: [WorkspaceComponent]
})
export class WorkspaceModule { }

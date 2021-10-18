import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageUserComponent } from './presentation/pages/page-user/page-user.component';
import { UsersComponent } from './presentation/views/users/users.component';
import { UserlistComponent } from './presentation/views/userlist/userlist.component';


@NgModule({
  declarations: [
    PageUserComponent,
    UsersComponent,
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [PageUserComponent]
})
export class UsersModule { }

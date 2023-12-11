import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {FormEmployeeManagementComponent} from "./pages/form-employee-management/form-employee-management.component";
import {NzTableModule} from "ng-zorro-antd/table";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DashboardOutline, FormOutline, MenuFoldOutline} from "@ant-design/icons-angular/icons";
import {routes} from "./app.routes";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {ModalCreateComponent} from "./pages/form-employee-management/modal-create/modal-create.component";
import {ModalDetailComponent} from "./pages/form-employee-management/modal-detail/modal-detail.component";
import {ModalUpdateComponent} from "./pages/form-employee-management/modal-update/modal-update.component";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {FormsModule} from "@angular/forms";

const icons = [DashboardOutline, MenuFoldOutline, FormOutline];

@NgModule({
  declarations: [
    AppComponent,
    FormEmployeeManagementComponent,
    ModalCreateComponent,
    ModalDetailComponent,
    ModalUpdateComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NzIconModule,
    NzTableModule,
    NzLayoutModule,
    RouterOutlet,
    RouterLink,
    NzMenuModule,
    NzIconModule.forRoot(icons),
    NzFormModule,
    NzButtonModule,
    NzToolTipModule,
    NzTypographyModule,
    NzModalModule,
    NzInputModule,
    NzSpaceModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

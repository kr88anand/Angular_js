import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultantComponent } from './consultant/consultant.component';
import { CompanyComponent } from './company/company.component';
import { ConsultantInformtionComponent } from './consultant-informtion/consultant-informtion.component';


export const routes: Routes = [
  {path: '', component: ConsultantComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'addConsultant', component: ConsultantInformtionComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

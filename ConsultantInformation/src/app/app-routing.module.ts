import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultantComponent } from './consultant/consultant.component';
import { CompanyComponent } from './company/company.component';

export const routes: Routes = [
  {path: '', component: ConsultantComponent},
  {path: 'company', component: CompanyComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

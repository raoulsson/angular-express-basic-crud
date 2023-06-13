import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import {AllDataComponent} from './all-data/all-data.component';
import {EditStudentComponent} from './edit-student/edit-student.component';
import {ViewStudentComponent} from './view-student/view-student.component';
import {AddProductComponent} from "./add-product/add-product.component";
import {ViewProductComponent} from "./view-product/view-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";

const routes: Routes = [
  {
    path: '',
    component: AllDataComponent,
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'edit-student/:id',
    component: EditStudentComponent,
  },
  {
    path: 'view-student/:id',
    component: ViewStudentComponent,
  },
  {
    path: 'view-product/:id',
    component: ViewProductComponent,
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

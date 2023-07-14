import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { LocalIsoDateValueAccessor } from 'angular-date-value-accessor';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormErrorComponent } from './form-error/form-error.component';

@NgModule({
  declarations: [
    BookFormComponent,
    BookCreateComponent,
    BookEditComponent,
    FormErrorComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    LocalIsoDateValueAccessor,
  ],
})
export class AdminModule {}

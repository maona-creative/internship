import { Component, OnInit, ViewChild } from '@angular/core';
import { WelderService } from './welder.service';
import { Welder } from './welder';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



// PrimeNg imports
import { FieldsetModule } from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import { Toolbar } from 'primeng/toolbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Table } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';





@Component({
  selector: 'app-welder',
  standalone: true,
  imports: [
    CommonModule, 
    TableModule, 
    FormsModule, 
    InputTextareaModule, 
    FieldsetModule,
    InputTextModule, 
    IconFieldModule, 
    InputIconModule, 
    ToastModule, 
    ButtonModule, 
    ToolbarModule,
    MessagesModule,
    ConfirmDialogModule,
    DialogModule,
    InputNumberModule,
    RadioButtonModule,
    InputMaskModule,
    CheckboxModule
   
  
   
    
  ],
  templateUrl: './welder.component.html',
  styleUrl: './welder.component.css',
  providers: [MessageService,  ConfirmationService]
})
export class WelderComponent implements OnInit{
  
  welders: Welder[] = [];
  loading: boolean = false;
 
  welderDialog: boolean = false;
  welder: Welder = {} as Welder; 
  selectedWelders: Welder[] = [];
  submitted: boolean = false;
  

  constructor(
    private welderService: WelderService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService ) {}

  ngOnInit(): void {
    this.welderService.getWelders().subscribe((welders) => {
      this.welders = welders;
      
    });
  }
 /* openNew() {
    const newWelder = { 
      id: this.welders.length + 1, 
      Super_First_name: '', 
      Super_Surname: '', 
      Super_mail: '', 
      Desired_Job_Category: '', 
      Desired_position: '', 
      Super_Telephone: 0, 
      asap: false, 
      Comment_1: '' 
    };
    this.welderService.createWelder(newWelder).subscribe(
      (response) => {
        this.welders.push(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'New welder added' });
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add new welder' });
      }
    ); 

     @ViewChild('dt2') dt2!: Table;

  onGlobalFilter(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && this.dt2) {
      this.dt2.filterGlobal(inputElement.value, 'contains');
    }
  }
*/

openNew() {
  
  this.welder = {} as Welder;
  this.submitted = false;
  this.welderDialog = true;
  
}

deleteSelectedWelders() {
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete the selected products?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.welders = this.welders.filter(val => !this.selectedWelders.includes(val));
      this.selectedWelders = [];
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Welders Deleted', life: 3000});
  }
});

          }
     
editProduct (welder: Welder) {
  this.welder = {...welder};
  this.welderDialog = true;
}


deleteProduct (welder: Welder) {
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete ' + welder.Super_First_name + '?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
        this.welders = this.welders.filter(val => val.id !== welder.id);
        this.welder = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Welder Deleted', life: 3000});
    }
});
}

hideDialog() {
  this.welderDialog = false;
  this.submitted = false;
}

/*saveWelder() {

  this.submitted = true;

  if (this.welder.Super_First_name?.trim()) {
      if (this.welder.id) {
          // If Welder ID exists, update the existing welder
          this.welders[this.findIndexById(this.welder.id)] = this.welder;                
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Welder Updated', life: 3000});
      } else {
          // If product ID does not exist, create a new ID
          this.welder.id = this.createId();
          this.welders.push(this.welder);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'New Welder Created', life: 3000});
             
        }

      // Refresh products list
      this.welders = [...this.welders];
      this.welderDialog = false; // Close the product dialog
      this.welder = {}; // Reset the product form
  }
}
*/

saveWelder() {
  this.submitted = true;

  if (this.welder.Super_First_name?.trim()) {
    if (this.welder.id) {
      // Update existing welder
      this.welderService.updateWelder(this.welder).subscribe(() => {
        this.welders[this.findIndexById(this.welder.id as number)] = this.welder;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Welder Updated', life: 3000 });
        this.refreshWelders();
      });
    } else {
      // Create new welder
      this.welder.id = this.createId();
      this.welderService.addWelder(this.welder).subscribe(() => {
        this.welders.push(this.welder);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Welder Created', life: 3000 });
        this.refreshWelders();
      });
    }

    this.welderDialog = false; // Close the dialog
    this.welder = {}; // Reset the form
  }
}


createId(): number {
  if (this.welders.length === 0) {
      return 1; // Start with 1 if there are no welders
  }

  const maxId = Math.max(...this.welders.map(welder => welder.id ?? 0 ));
  return maxId + 1;
}

findIndexById(id: number): number {
  let index = -1;
  for (let i = 0; i < this.welders.length; i++) {
      if (this.welders[i].id === id) {
          index = i;
          break;
      }
  }

  return index;
}

refreshWelders() {
  this.welderService.getWelders().subscribe(data => {
    this.welders = data;
  });
}


  }








  
   
  
  


 



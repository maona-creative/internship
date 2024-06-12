import { Component, OnInit, ViewChild } from '@angular/core';
import { WelderService } from './welder.service';
import { Welder } from './welder';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNg imports
import { FieldsetModule } from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-welder',
  standalone: true,
  imports: [CommonModule, TableModule, FormsModule, InputTextareaModule, FieldsetModule,
    InputTextModule, IconFieldModule, InputIconModule
  ],
  templateUrl: './welder.component.html',
  styleUrl: './welder.component.css'
})
export class WelderComponent implements OnInit{

  welders: Welder[] = [];
  loading: boolean = false;

  constructor(private welderService: WelderService) {}

  ngOnInit(): void {
    this.welderService.getWelders().subscribe((welders) => {
      this.welders = welders;
      
    })
  }

  @ViewChild('dt2') dt2!: Table;

  onGlobalFilter(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && this.dt2) {
      this.dt2.filterGlobal(inputElement.value, 'contains');
    }
  }
  
}

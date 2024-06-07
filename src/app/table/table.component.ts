import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from '../comment-list/comment-list.component';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, CommentListComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent{
 
}

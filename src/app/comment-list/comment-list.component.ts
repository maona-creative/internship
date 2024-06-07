import { Component, OnInit } from '@angular/core';
import { TableService } from '../table/table.service';
import { Comment } from '../table/table';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css'
})
export class CommentListComponent implements OnInit {
 comments: Comment[] = [];

 constructor(private tableService: TableService) {}

 ngOnInit(): void {
  this.tableService.getComments().subscribe((comments) => {
    this.comments = comments;
 });
}
}

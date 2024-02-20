import { Component, Input } from '@angular/core';
import { comments } from '../../model/incidents';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
@Input() _comments:comments[];
}

import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { CommentInterface } from '../../types/comments';

@Component ({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
    comments: CommentInterface[];
    isLoading: boolean = true;
    title: string = "Display All Comments";
    constructor (
        private commentsService: CommentsService
    ) { }

    ngOnInit () {
        this.commentsService.getComments().then(res => {
        this.comments = res;
        this.isLoading = false;
       });
    }
}
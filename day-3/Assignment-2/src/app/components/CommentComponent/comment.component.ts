import { Component, Input } from '@angular/core';
import { CommentInterface } from '../../types/comments';

@Component ({
    selector: 'app-comment',
    templateUrl: './comment-component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
    @Input()
    comment: CommentInterface;
    constructor () {}
}
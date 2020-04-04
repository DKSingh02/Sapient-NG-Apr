import { Injectable } from '@angular/core';
import  commentsData from '../mocks/comments-data';
import { CommentInterface } from '../types/comments';

@Injectable()
export class CommentsService {
    getComments (): Promise<Array<CommentInterface>> {
        return new Promise<Array<CommentInterface>> ((resolve) => {
            setTimeout(function() {
                resolve(commentsData);
              }, 2000);
        });
    }
}
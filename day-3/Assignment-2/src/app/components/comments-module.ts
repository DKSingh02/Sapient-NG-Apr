import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentsComponent, CommentComponent } from './index';
import { CommentsService } from '../services/comments.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [ CommentsComponent, CommentComponent ],
    providers: [ CommentsService ],
    imports: [ BrowserModule, MatCardModule, MatExpansionModule ],
    exports: [ CommentsComponent, CommentComponent]
})
export class CommentsModule {}
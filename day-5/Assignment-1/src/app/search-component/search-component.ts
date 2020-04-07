import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Player } from '../types/Players';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.html',
  styleUrls: ['./search-component.css']
})
export class SearchComponent implements OnInit {

  /**
   * this is formControl variable
   */
  searchField: FormControl;
  /**
   * this variable holds list of all the players
   */
  players: Player[] = [];
  /**
   * Title of the component
   */
  title: string = 'Enter Search Term Below:';

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {

  // searchField to watch any changes in search term.
  this.searchField = new FormControl('');

  // get all players on initial load.
  this.players = this.searchService.getAllPlayers();

  // Search Logic : get searched players based on search criteria
  this.searchField.valueChanges
    .pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(searhTerm => {
      this.search(searhTerm);
  });
  }

  /**
   * this Method takes serach term as a input from user and call 
   * getPlayers method to get serach data based on searchTerm
   * @param searchTerm 
   */
  search(searchTerm: string): void {
    this.players = this.searchService.getPlayers(searchTerm);
  }
}

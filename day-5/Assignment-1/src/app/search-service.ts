import { Injectable } from '@angular/core';
import players from './mocks/players'
import { Player } from './types/Players';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  /**
   * this variable holds list of all the players
   */
  playersList: Player[];

  constructor() { 
    this.playersList = players;
  }

  /**
   * this Method return all the player lists on defalt load 
   * @returns playersList of all Player[]
   */
  getAllPlayers(): Player[] {
    return this.playersList;
  }

  /**
   * this Method takes serach term as a input from search component 
   * and after performing serach logic return list of players 
   * @param searchTerm 
   * @returns palyers of Player[]
   */
  getPlayers(searhTerm: string): Player[]{
    return this.playersList.filter((player) => {
       return JSON.stringify(player).toLowerCase().includes(searhTerm);
    });
  }
}

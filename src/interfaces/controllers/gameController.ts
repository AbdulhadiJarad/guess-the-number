// src/controllers/gameController.ts

import Player from '../../domain/entities/player';
import Ranking from '../../domain/entities/ranking';

class GameController {
    players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }

    playRound(): void {
        // const prediction = new Prediction(randomNumber);

       

      
    }

    getRanking(): Player[] {
        const ranking = new Ranking(this.players);
        return ranking.getTopPlayers(this.players.length);
    }
}

export default GameController;
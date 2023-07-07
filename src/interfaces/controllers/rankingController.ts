// src/controllers/rankingController.ts

import Player from '../../domain/entities/player';
import Ranking from '../../domain/entities/ranking';

class RankingController {
    players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }

    getTopPlayers(count: number): Player[] {
        const ranking = new Ranking(this.players);
        return ranking.getTopPlayers(count);
    }
}

export default RankingController;
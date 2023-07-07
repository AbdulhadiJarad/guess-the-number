// src/domain/entities/ranking.ts

import Player from './player';

class Ranking {
    players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }

    getTopPlayers(count: number): Player[] {
        const sortedPlayers = [...this.players].sort((a, b) => b.getScore() - a.getScore());
        return sortedPlayers;
    }

    updateRanking(): void {
        this.players.sort((a, b) => b.getScore() - a.getScore());
    }
}

export default Ranking;
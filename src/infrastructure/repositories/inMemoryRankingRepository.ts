// src/repositories/inMemoryRankingRepository.ts

import Player from '../../domain/entities/player';
import Score from '../../domain/entities/score';
import Ranking from '../../domain/entities/ranking';
import RankingRepository from '../../domain/repositories/rankingRepository';

class InMemoryRankingRepository implements RankingRepository {
    players: Player[];

    constructor() {
        this.players = [];
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    getPlayer(name: string): Player | undefined {
        return this.players.find((player) => player.name === name);
    }

    updatePlayerPoints(player: Player, score: number): void {
        player.scores += score;
    }

    getTopPlayers(count: number): Player[] {
        const ranking = new Ranking(this.players);
        return ranking.getTopPlayers(count);
    }
}

export default InMemoryRankingRepository;
// src/repositories/inMemoryGameRepository.ts

import Player from '../../domain/entities/player';
import Score from '../../domain/entities/score';
import GameRepository from '../../domain/repositories/gameRepository';

class InMemoryGameRepository implements GameRepository {
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
}

export default InMemoryGameRepository;
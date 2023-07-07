// src/repositories/playerRepository.ts

import Player from '../../domain/entities/player';

class PlayerRepository {
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

    getPlayers(): Player[] {
        return this.players;
    }

    removePlayer(name: string): void {
        const index = this.players.findIndex((player) => player.name === name);
        if (index !== -1) {
            this.players.splice(index, 1);
        }
    }
}

export default PlayerRepository;
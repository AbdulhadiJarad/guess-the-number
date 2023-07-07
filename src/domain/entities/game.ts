// src/domain/entities/game.ts

import Player from './player';

class Game {
    id: string;
    name: string;
    players: Player[];

    constructor(id: string, name: string, players: Player[]) {
        this.id = id;
        this.name = name;
        this.players = players;
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    removePlayer(player: Player): void {
        const index = this.players.indexOf(player);
        if (index !== -1) {
            this.players.splice(index, 1);
        }
    }

    getPlayers(): Player[] {
        return this.players.slice();
    }
}

export default Game;
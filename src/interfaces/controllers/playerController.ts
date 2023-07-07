// src/controllers/playerController.ts

import Player from '../../domain/entities/player';

class PlayerController {
    players: Player[];

    constructor() {
        this.players = [];
    }

    addPlayer(id: number, name: string, prediction: number): Player {
        const player = new Player(id, name, prediction);
        this.players.push(player);
        return player;
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

export default PlayerController;
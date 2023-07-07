// src/domain/usecases/declareWinner.ts

import Player from '../entities/player';
import Ranking from '../entities/ranking';

function declareWinner(players: Player[]): Player[] {
    const ranking = new Ranking(players);
    const topPlayer = ranking.getTopPlayers(1);
    return topPlayer;
}

export default declareWinner;
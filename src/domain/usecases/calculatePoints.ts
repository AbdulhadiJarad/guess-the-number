// src/domain/usecases/calculatePoints.ts

import Player from '../entities/player';
import Score from '../entities/score';

function calculatePoints(player: Player, prediction: number, points: any): number {
    new Score(prediction, points);
    player.addScore(prediction + points);
    player.scores = prediction + points
    return prediction + points;
}

export default calculatePoints;
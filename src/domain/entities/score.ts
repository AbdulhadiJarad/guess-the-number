// src/domain/entities/score.ts

import { Prediction } from "../valueObjects/prediction";
import { MultiplierValue } from "../valueObjects/multiplierValue";

class Score {
    value: number;

    constructor(prediction: number, multiplier: number) {
        this.value = prediction * multiplier;
    }
}

export default Score;
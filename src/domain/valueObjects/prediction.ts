// src/domain/valueObjects/prediction.ts

class Prediction {
    value: number;

    constructor(value: number) {
        if (value < 0 || value > 100) {
            throw new Error('Prediction value must be between 0 and 100');
        }
        this.value = value;
    }
}

export { Prediction };
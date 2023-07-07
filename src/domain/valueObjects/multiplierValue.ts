// src/domain/valueObjects/multiplierValue.ts

class MultiplierValue {
    value: number;

    constructor(value: number) {
        if (value < 1) {
            throw new Error('Multiplier value must be at least 1');
        }
        this.value = value;
    }
}

export { MultiplierValue };
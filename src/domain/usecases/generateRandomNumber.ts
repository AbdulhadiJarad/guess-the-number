// src/domain/usecases/generateRandomNumber.ts

function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default generateRandomNumber;
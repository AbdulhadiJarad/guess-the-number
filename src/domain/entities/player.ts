
class Player {
    id: number;
    name: string;
    startingPoints: number;
    roundPoints: number;
    prediction: number;
    scores: number;

    constructor(id: number, name: string, prediction: number) {
        this.id = id;
        this.name = name;
        this.startingPoints = 100;
        this.prediction = prediction;
        this.roundPoints = 0;
        this.scores = 0;
    }

    setRoundPoints(value: number) {
        this.roundPoints = value
    }

    setPoints(value: number) {
        this.startingPoints = value
    }

    getRoundPoints(){
        return this.roundPoints;
    }

    setPredictionValue(value: number) {
        this.prediction = value
    }

    getPredictionValue() {
        return this.prediction
    }

    addScore(points: number): void {
        this.scores += points;
    }

    getScore(): number {
        return this.scores
    }
}

export default Player;
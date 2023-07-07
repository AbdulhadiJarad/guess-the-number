// src/services/gameService.ts

import Player from '../domain/entities/player';
import Ranking from '../domain/entities/ranking';
import GameRepository from '../domain/repositories/gameRepository';
import PlayerRepository from '../domain/repositories/playerRepository';
import RankingRepository from '../domain/repositories/rankingRepository';
import calculatePoints from '../domain/usecases/calculatePoints';
import isWinner from '../domain/usecases/checkWinner';
import declareWinner from '../domain/usecases/declareWinner';
import generateBostsChat from '../domain/usecases/generateChats';
import generateRandomNumber from '../domain/usecases/generateRandomNumber';
import { MultiplierValue } from '../domain/valueObjects/multiplierValue';

class GameService {
    gameRepository: GameRepository;
    playerRepository: PlayerRepository;
    ranking: Ranking;
    startingPoints: number;
    points: number
    rounds: number
    multiplierValue: number

    constructor(gameRepository: GameRepository, playerRepository: PlayerRepository, rankingRepository: RankingRepository) {
        this.gameRepository = gameRepository;
        this.playerRepository = playerRepository;
        this.ranking = new Ranking(playerRepository.getPlayers());
        this.generateBots()
        this.startingPoints = 100;
        this.points = 0;
        this.rounds = 1;
        this.multiplierValue = 0;
    }

    generateBots(): void {
        for(let i = 0 ;i<4;i++){
            const randomIDNumber = Math.ceil(Math.random()* 100)
            const botPredictionValue = Math.floor(Math.random() * 100)
            const player = new Player(randomIDNumber, `Bot${randomIDNumber}`, botPredictionValue); // Initialize starting points to 100
            this.addPlayer(player)
            const botPoint = Math.floor(Math.random() * (player.startingPoints - 1 + 1) + 1)
            player.setPoints(100)
            player.setRoundPoints(botPoint)
        }
    }

    generateBotsPredictionValues():void {
        this.playerRepository.getPlayers().forEach(player => {
            if (player.name.includes('Bot')){
                const botPredictionValue = Math.floor(Math.random() * 100)
                player.setPredictionValue(botPredictionValue)
            }
        })
    }

    generateChats(){
        const players = this.playerRepository.getPlayers();
        const randomPlayer = players[Math.floor(Math.random() * players.length)].name
        return { message: generateBostsChat() , name: randomPlayer}
    }

    addPlayer(player: Player): void {
        this.playerRepository.addPlayer(player);
        this.ranking = new Ranking(this.playerRepository.getPlayers());
    }

    getPlayers(){
        return this.playerRepository.getPlayers()
    }

    setRoundPoints(points: number): void {
        this.points = points
    }

    getPlayer(name: string): Player | undefined {
        return this.playerRepository.getPlayer(name);
    }

    updatePlayerPoints(player: Player, points: number, multiplier: number): void {
        // player.addScore(points, multiplier);
        this.ranking.updateRanking();
    }

    getTopPlayers(count: number): Player[] {
        return this.ranking.getTopPlayers(count);
    }
    
    initializeStartingPoints(): void {
        const players = this.playerRepository.getPlayers();
        players.forEach(player => {
            player.startingPoints = this.startingPoints;
        });
    }

    generateRandomMultiplier(): void {
        const randomNumber = generateRandomNumber(0, 100)
        this.multiplierValue = randomNumber
        new MultiplierValue(randomNumber);
    }

    getMultiplierValue(): number {
        return this.multiplierValue
    }

    getRounds(): number{
        return this.rounds
    }

    playRound(): void {
        this.rounds++; 
        this.generateRandomMultiplier()
        for (const player of this.playerRepository.getPlayers()) {
            player.setPoints(player.startingPoints - player.getRoundPoints())
            if (isWinner(player.prediction, this.multiplierValue)){
                const score = calculatePoints(player, player.prediction, player.getRoundPoints());
                player.addScore(score)
            }
        }
        declareWinner(this.playerRepository.getPlayers());
    }

    getRanking(): Player[] {
        const ranking = new Ranking(this.playerRepository.getPlayers());
        return ranking.getTopPlayers(this.playerRepository.getPlayers().length);
    }
}

export default GameService;
// src/components/GameComponent.tsx

import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Player from '../../domain/entities/player';
import GameRepository from '../../domain/repositories/gameRepository';
import PlayerRepository from '../../domain/repositories/playerRepository';
import RankingRepository from '../../domain/repositories/rankingRepository';
import InMemoryGameRepository from '../../infrastructure/repositories/inMemoryGameRepository';
import InMemoryPlayerRepository from '../../infrastructure/repositories/inMemoryPlayerRepository';
import InMemoryRankingRepository from '../../infrastructure/repositories/inMemoryRankingRepository';
import GameService from '../../services/gameService';
import Chat from '../chat';
import CurrentRound from '../currentRound';
import LineChart from '../lineChart';
import Multiplier from '../multiplier';
import PointsUI from '../points';
import Ranking from '../ranking';
import Score from '../score/index';
import Time from '../time';
import User from '../user';

interface Props { }

const GameComponent: React.FC<Props> = () => {
    const [playerName, setPlayerName] = useState('');
    const [displayArena, setDisplayArena] = useState(false);
    const [playerPoints, setPlayerPoints] = useState(100);
    const [roundDone, setRoundDone] = useState(false);
    const [ready, setReady] = useState(false);
    const [multiplierValue, setMultiplierValue] = useState(0);
    const [roundNumbers, setRoundNumbers] = useState(1);
    const [playerScore, setPlayerScore] = useState(100);
    const [playerMultiplier, setPlayerMultiplier] = useState(100);
    const [players, setPlayers] = useState<Player[]>([]);
    const [chats, setChats] = useState<{ name: string; message: string }>({name: 'Admin', message: 'You can start chating together guys !'});

    const gameRepository: GameRepository = new InMemoryGameRepository();
    const playerRepository: PlayerRepository = new InMemoryPlayerRepository();
    const rankingRepository: RankingRepository = new InMemoryRankingRepository();
    const gameService: GameService = new GameService(gameRepository, playerRepository, rankingRepository);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setChats(gameService.generateChats())
        }, 5000);

        return () => clearInterval(intervalId);
    });
    
    const handlePlayerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(event.target.value);
    };

    const handleAddPlayer = () => {
        const player = new Player(Math.ceil(Math.random() * 100), playerName, playerMultiplier); // Initialize starting points to 100
        player.setRoundPoints(playerPoints)
        gameService.addPlayer(player);
        player.setPoints(100)
    };

    const displayArenaTrigger = () => {
    
        setDisplayArena(true)
    }

    const playRound = () => {
        handleAddPlayer()
        gameService.playRound() 
        setMultiplierValue(gameService.getMultiplierValue())
        setReady(true)
        setRoundNumbers(gameService.getRounds())
        setPlayers(gameService.getPlayers())
        setPlayerScore(gameService.playerRepository.getPlayers()[0].getScore())
        setRoundDone(true)
    }
    
    const getPointsValue = (points: number) => {
        setPlayerPoints(points)
        return points
    }

    const getMultiplierValue = (points: number) => {
        setPlayerMultiplier(points)
        return points
    }


    return (
        <div>
            <Box sx={{display:'flex', mt:5, alignItems: 'center', width: 1, justifyContent: 'space-between'}}>
                <PointsUI getPointsValue={getPointsValue} />
                <Multiplier getMultiplierValue={getMultiplierValue} />
                <Score score={playerScore} />
                <User name={playerName} />
                <Time/>
            </Box>
            <Box sx={{display: 'flex', mt:5, width: 1, justifyContent: 'space-between'}}>
                {!!displayArena  && <Box sx={{ flexBasis: '35%', px: "0px" }}>
                    <Button fullWidth onClick={playRound} sx={{ background: '#f24c70', mb: 2, color: 'white'}}>Start Round #{roundNumbers}</Button>
                    <CurrentRound players={players} />
                </Box>}
                {!displayArena && <Box sx={{ background: '#222834', height: 350, flexBasis: '35%', position :'relative', borderRadius: '8px' }}>
                    <Box sx={{position: 'absolute', top: '50%', left: '50%', margin: 0,  transform: 'translate(-50%, -50%)'}}>
                        <Typography sx={{textAlign:'center', color: 'white', mb: 2}}>
                            Please Enter Your Name
                        </Typography>
                        <TextField onChange={handlePlayerNameChange} value={playerName} size='small' sx={{ width: 300, backgroundColor: '#1a2129', borderRadius: '8px', input: { color: 'white' } }} />
                        <Button fullWidth onClick={displayArenaTrigger} variant='contained' sx={{backgroundColor:'gray', color: 'white', mt: 1}}>Accept</Button>

                    </Box>
                </Box>}
               {ready && <Box sx={{ px: "0px", flexBasis: '63%' }}>
                    <LineChart multiplierValue={multiplierValue} />
                    <Typography sx={{color:'white'}}>
                        Multiplier Value: {multiplierValue}
                    </Typography>
                </Box>}
            </Box>
            <Box sx={{display:'flex', mt:3, justifyContent: 'space-between'}}>
                <Box sx={{ flexBasis: '45%' }}>
                    {roundDone && <Ranking players={players} />}
                </Box>
                <Box sx={{ flexBasis: '50%' }}>
                    <Chat propChat={chats} />
                </Box>
            </Box>
        </div>
    );
};

export default GameComponent;
// MyComponent.tsx

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import Medal from '../../assets/chat.svg';
import styles from './styles';

type PropChat = {
    name: string;
    message: string;
};

type Props = {
    propChat: PropChat;
};

function Chat({ propChat }: Props) {

    const [chats, setChats] = useState<{ name: string; message: string }[]>([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        let prevChat = [...chats];
        prevChat.push(propChat)
        setChats(prevChat)
    }, [propChat])

    const handleSendMessage = () => {
        const prevChats = [...chats];
        prevChats.push({ name: 'Abdulhadi Jarad', message })
        setMessage('')
        setChats(prevChats);
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    return (
        <Box >
            <Box sx={{display: 'flex', gap: 2, color:'white', alignItems: 'center'}}>
                <Box>
                    <img style={{ width: '30px' }} src={Medal} />
                </Box>
                <Typography>
                    Chat
                </Typography>
            </Box>
            <Box sx={styles.root}>
                <Box sx={{height: '200px', overflowY: 'auto'}}>
                    {chats.map((chat, index) => <Box key={index} sx={{ px: '10px', py: '5px', display: 'fldex', gap: 2}}>
                        <Typography sx={{ color: '#d0426d'}}>
                            <span style={{fontSize: '13px', fontWeight: 'bold'}}>{chat.name}</span>: <Chip sx={{ color: '#ffffffb3', background: '#343c47'}} label={chat.message} />
                        </Typography>
                    </Box>)}
                </Box>
                <Box sx={{ height: '100%', backgroundColor: '#343c47', padding: '8px', display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <TextField onChange={handleMessageChange} value={message} size='small' sx={{ width: 1, backgroundColor: '#1a2129', borderRadius: '8px', input: { color: 'white' }}} />
                    <Button onClick={handleSendMessage} sx={{ background: '#eb437e', height: 40}} variant='contained'>
                        Start
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Chat;
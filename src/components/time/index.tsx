// MyComponent.tsx

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Medal from '../../assets/clock.svg'
import styles from './styles';

function Time() {

    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

    return (
        <Box sx={styles.box}>
            <Box sx={styles.imageBox}>
                <img style={{ width: '100%', height: '100%' }} src={Medal} alt='medal' />
            </Box>
            <Box sx={{ margin: '0px auto' }}>
                <Typography sx={styles.numberText}>{`${formattedTime}`}</Typography>
            </Box>
        </Box>
    );
}

export default Time;
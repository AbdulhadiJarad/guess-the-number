// MyComponent.tsx

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Medal from '../../assets/person.svg'
import styles from './styles';

interface PlayerProps {
    name: string;
}

function User(props: PlayerProps) {

    return (
        <Box sx={styles.box}>
            <Box sx={styles.imageBox}>
                <img style={{ width: '100%', height: '100%' }} src={Medal} alt='medal' />
            </Box>
            <Box sx={{ margin: '0px auto' }}>
                <Typography sx={styles.numberText}>{props.name}</Typography>
            </Box>
        </Box>
    );
}

export default User;
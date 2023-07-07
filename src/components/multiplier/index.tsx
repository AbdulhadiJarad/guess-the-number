// MyComponent.tsx

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import styles from './styles';
import React from 'react'

function Multiplier({ getMultiplierValue }: any) {
    const [value, setValue] = React.useState(100)
    const handlePointChange = (type: number) => {
        if (type === 1) {
            setValue(value + 1)
            getMultiplierValue(value + 1)
        } else {
            setValue(value - 1)
            getMultiplierValue(value - 1)
        }
    }
    return (
        <Box sx={styles.root}>
            <Typography sx={styles.title}>Multiplier</Typography>
            <Box sx={styles.container}>
                <Box onClick={() => handlePointChange(1)} sx={styles.buttonBox}>
                    <Tooltip title='Increase'>
                        <IconButton sx={styles.iconButton}>
                            <ArrowDropUpIcon sx={styles.arrowIcon} />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box>
                    <TextField
                        InputProps={{
                            disableUnderline: true,
                        }}
                        size='small'
                        color='primary'
                        value={value}
                        sx={styles.inputBox}
                    />
                </Box>
                <Box onClick={() => handlePointChange(0)} sx={styles.buttonBox}>
                    <Tooltip title='Increase'>
                        <IconButton sx={styles.iconButton}>
                            <ArrowDropDownIcon sx={styles.arrowIcon} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    );
}

export default Multiplier;
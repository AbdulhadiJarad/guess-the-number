// styles.ts

const styles = {
    root: {
        color: 'white',
        padding: '8px',
        border: '1px solid #67606042',
        borderRadius: '5px',
        height: 1,
        width: 'fit-content',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '12px',
        color: '#505460',
        margin: '0px',
        mb: '2px',
    },
    container: {
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        cursor: 'pointer',
    },
    buttonBox: {
        border: '1px solid  #50544b',
        borderRadius: '5px',
    },
    inputBox: {
        background: '#0f1416',
        color: 'white !important',
        textAlign: 'center',
        input: {
            color: 'white',
            textAlign: 'center',
            width: '60px',
            border: '0px',
            height: '5px',
        },
        borderRadius: '8px',
        border: '0px',
    },
    iconButton: {
        padding: '0px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    arrowIcon: {
        color: 'white',
    },
};
export default styles;
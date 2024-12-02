import React from 'react';
import '../custom.scss';
import { useTheme } from '../context/ThemeContext';
import Container from 'react-bootstrap/Container';

const Spacer = () => {
    const { theme } = useTheme();

    return (
        <>
            <Container className={`needSpace ${theme === 'light' ? 'body-bg-light' : 'body-bg-light'}`} fluid></Container>
        </>
    );
};

export default Spacer;
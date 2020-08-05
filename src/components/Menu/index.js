import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, ManuWrapper } from './style';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <ManuWrapper>
            <Link to="/">
                <LogoImage src={Logo} alt="AluraFlix Logo" />
            </Link>
            <Button as={Link} to="/cadastro/video">
                Novo Vídeo
            </Button>
        </ManuWrapper>
    );
}

export default Menu;
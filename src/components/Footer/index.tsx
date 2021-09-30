import { Container } from './styles';

import { FaHeart } from 'react-icons/fa';

export function Footer() {
    return (
        <Container>
            Developed with<FaHeart className="icon" />by Ian Langkammer Batista
        </Container>
    );
}
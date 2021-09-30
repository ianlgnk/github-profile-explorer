import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    padding: 1rem 1rem;
    position: relative;
    height: 10vh;

    svg {
        position: absolute;
        top: 1rem;
        left: 1rem;
        cursor: pointer;

        &:hover {
            filter: brightness(1.1);
        }
    }

    .header-icon {
        top: 1.1rem;
        left: calc(100% - 2rem);
        transform: rotate(180deg);
    }
`;

export const UserImg = styled.div`
    position: absolute;
    top: 7vh;
    background-color: #FFF;
    max-width: 120px;
    padding: 1px;
    display: flex;
    border-radius: 100px;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 100px;
    }

    @media (max-width: 500px) {
        top: 9vh;
        max-width: 80px;
    }
`;
import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.2);
    padding: 5rem 1.5rem 1.5rem 1.5rem;

    max-width: 100%;

    h1 {
        font-size: 1.5rem;
        text-align: center;
        margin: 0;
        margin-bottom: 1rem;
    }

    .bio {
        max-width: 100%;
        padding: 0rem 2rem 2rem 2rem;
        text-align: center;
    }

    @media (max-width: 500px) {
        padding: 3.5rem 1rem 1rem 1rem;

        .bio {
            padding: 0rem 0.5rem 0.5rem 1rem;
            margin-bottom: 1rem;
        }
    }
`;

export const InfosContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        border: 1px solid #21262D;
        cursor: pointer;
        transition: all 0.2s;

        span {
            display: flex;
            justify-content: center;
            font-size: 12px;
            margin-top: 0.2rem;
        }

        svg {
            font-size: 25px;
        }

        @media (min-width: 768px) {
            &:hover {
                transform: translateY(-5px);
                filter: brightness(1.1);
                background: #FFF;
                color: #0A0E12;
            }

            max-width: 100%;
        }
    }

    margin-bottom: 0.5rem;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;

        div {
            width: calc(100% - 2px - 32px);
            margin-bottom: 0.5rem;
        }
    }
`;
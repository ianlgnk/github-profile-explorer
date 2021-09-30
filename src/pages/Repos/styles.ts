import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: calc(100vh - 2rem);
    max-width: 100vw;
    
    padding: 1rem 0rem;
`;

export const PageContainer = styled.div`
    width: 80%;
    max-width: 500px;

    border-radius: 6px;
    border: 1px solid #21262D;

    margin-bottom: 1rem;
`;
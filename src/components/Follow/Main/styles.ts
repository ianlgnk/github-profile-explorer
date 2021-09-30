import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.2);
    padding: 5rem 1.5rem 1.5rem 1.5rem;

    max-width: 100%;

    @media (max-width: 500px) {
        padding: 3.5rem 1rem 1rem 1rem;
    }
    
    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-bottom: 1rem;
            border-bottom: 1px solid #21262D;

            & + li {
                margin-top: 1rem;
            }

            &:last-child {
                padding-bottom: 0;
                border-bottom: 0px solid #21262D;
            }

            .avatar-container {
                background: #FFF;
                padding: 2px;
                border-radius: 100px;
                overflow: hidden;
                display: flex;
                max-width: 80px;
                margin-right: 1rem;
                width: 40%;

                img {
                    width: 100%;
                    height: auto;
                    border-radius: 100px;
                }
            }

            .name-icon {
                display: flex;
                justify-content: space-between;
                width: 100%;

                svg {
                    width: 20px;
                    color: #8B949E;
                    transition: all 0.5s;
                    cursor: pointer;

                    &:hover {
                        color: #58a6ff;
                        filter: brightness(1.1);
                    }
                }

                h1 {
                    max-width: 80%;
                    text-align: left;
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 300;
                }

                button {
                    display: flex;
                    background: transparent;
                    outline: none;
                    border: 0px;
                    margin: 0;
                    padding: 0;
                }
            }
        }
    }
`;
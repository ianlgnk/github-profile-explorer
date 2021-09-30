import styled from 'styled-components';

export const Container = styled.form`
    background: #161B22;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #21262D;

    label {
        margin-bottom: 0.5rem;
        font-weight: 300;
        font-size: 0.8rem;
    }

    .input-container {
        position: relative;

        input {
            width: calc(100% - 26px);
            outline: none;
            margin-bottom: 1rem;
            padding: 5px 12px;
            line-height: 20px;
            vertical-align: middle;
            background: #0D1117;
            color: #C9D1D9;
            border: 1px solid #30363D; 
            border-radius: 6px;
            font-weight: 300;
            font-size: 0.8rem;

            transition: all 0.2s;

            &:focus {
                border: 1px solid #1F6FEB;
                box-shadow: 0px 0px 0px 3px #0C2D6B;
            }

            &.empty {
                border: 1px solid #A51B0B;
                box-shadow: 0px 0px 0px 3px #52170B;
            }
        }

        #alert-icon {
            position: absolute;
            color: #A51B0B;
            top: 8px;
            right: 12px;
            opacity: 0;
            transition: opacity 0.2s;

            &.active {
                opacity: 1;
            }
        }
    }

    button {
        width: 100%;
        outline: none;
        background: #238636;
        color: #FFF;
        font-family: Work Sans, sans-serif;
        font-size: 0.8rem;
        font-weight: 500;
        border: 1px solid rgba(240, 246, 252, 0.1);
        padding: 5px 12px;
        border-radius: 6px;
        transition: all 0.2s;

        &:hover {
            filter: brightness(1.05);
        }
    }

    margin-bottom: 2rem;
`;
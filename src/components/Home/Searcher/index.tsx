import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useUser } from '../../../hooks/useUser';

import { Container } from './styles';

import { FiAlertTriangle } from 'react-icons/fi';

export function Searcher() {
    const [username, setUsername] = useState<string | undefined>();
    const { searchUser } = useUser();
    const history = useHistory();

    useEffect(() => {
        if (username === undefined)
            return;
        isEmpty();
    });

    function inputEffect(option: number) {
        const userInput = document.getElementById('usernameInput');
        const alertIcon = document.getElementById('alert-icon');
        
        if (option === 1) {
            userInput?.classList.add('empty');
            alertIcon?.classList.add('active');
            userInput?.focus();
        } else {
            userInput?.classList.remove('empty');
            alertIcon?.classList.remove('active');
        }
    }

    function isEmpty() {
        if(username?.length === 0 || username === undefined) {
            inputEffect(1);
            return true;
        } else {
            inputEffect(0);
            return false;
        }
    }

    async function handleSearchUser() {
        if (isEmpty()) {
            return;
        } else {
            await searchUser(username)
                .then(response => {
                    if (response !== 0) {
                        history.push('/user');
                    }
                });
        }
    }

    document.getElementById('usernameInput')?.addEventListener('focusout', () => {
        inputEffect(0);
    });

    return (
        <Container>
            <label>Username</label>
            <div className="input-container">
                <input
                    id="usernameInput"
                    type="text"
                    value={username === undefined ? '' : username}
                    onChange={(e) => setUsername(e.target.value) }
                />
                <FiAlertTriangle id="alert-icon" />
            </div>
            <button
                type="button"
                onClick={() => handleSearchUser()}
            >
                Search
            </button>
        </Container>
    );
}
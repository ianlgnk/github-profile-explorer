import { ReactElement } from 'react';

import { FollowData } from '../../../hooks/useUser';

import { Container } from './styles';

interface MainProps {
    profileIcon: ReactElement,
    follow: FollowData[],
    acessUser: (username: string, lastPageName: string) => void,
    page: string
}

export function Main(props: MainProps) {
    return (
        <Container>
            <ul>
                {props.follow.map((follower) => {
                    return (
                        <li key={follower.id}>
                            <div className="avatar-container">
                                <img src={follower.avatar_url} alt="User Avatar - Github" />
                            </div>
                            <div className="name-icon">
                                <h1>{follower.login}</h1>
                                <button onClick={(e) => {
                                        e.preventDefault();
                                        props.acessUser(follower.login, props.page);
                                    }
                                }
                                >
                                    {props.profileIcon}
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
}

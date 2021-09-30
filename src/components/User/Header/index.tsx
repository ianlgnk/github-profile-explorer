import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserData } from '../../../hooks/useUser';
import { api } from '../../../services/api';

import { Container, UserImg } from './styles';

import { RiLogoutCircleLine } from 'react-icons/ri';
import { BiArrowBack } from 'react-icons/bi';

interface HeaderProps {
    user: UserData | null,
    logOut: () => void,
    auxUser: string | undefined,
    lastPage: string | undefined,
    handleNewUser: () => void
}

export function Header(props: HeaderProps) {
    const [auxUserData, setAuxUserData] = useState<UserData>();
    const history = useHistory();
    
    useEffect(() => {
        async function getAuxUserData() {
            await api.get(`users/${props.auxUser}`)
                .then(response => { setAuxUserData(response.data)});
        }

        if (props.auxUser !== null) {
            getAuxUserData();
        }
    }, [props.auxUser]);

    function HeaderIcons() {
        if (props.user !== null) {
            return (
                <>
                    <RiLogoutCircleLine
                        color={"#A51B0B"}
                        onClick={props.logOut}
                    />
                    <span>{props.user.login}</span>
                </>
            );
        } else {
            return (
                <>
                    <BiArrowBack
                        onClick={() => history.push(`/${props.lastPage}`)}
                    />
                    <span>{auxUserData?.login}</span>
                    <RiLogoutCircleLine
                        className="header-icon"
                        color={"#238636"}
                        onClick={props.handleNewUser}
                    />
                </>
            );
        }
    }

    function UserAvatar() {
        if (props.user !== null) {
            return (
                <img src={props.user.avatar_url} alt="User Avatar - Github" />
            );
        } else {
            return (
                <img src={auxUserData?.avatar_url} alt="User Avatar - Github" />
            );
        }
    }

    return (
        <Container>
            <HeaderIcons />
            <UserImg>
                <UserAvatar />
            </UserImg>
        </Container>
    );
}
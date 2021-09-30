import { createContext, useContext, ReactNode, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api';

interface UserProviderProps {
    children: ReactNode
}

export interface UserData {
    id: number,
    name: string,
    login: string,
    avatar_url: string,
    public_repos: number,
    followers: number,
    following: number,
    bio: string,
}

interface ReposData {
    id: number,
    name: string,
    description: string,
    stargazers_count: number,
    forks_count: number,
    html_url: string
}

export interface FollowData {
    id: number,
    login: string,
    avatar_url: string
}

interface UserContextData {
    user: UserData,
    searchUser: (username: string | undefined)=> Promise<number | void>,
    logOut: () => void,
    userRepos: () => void,
    repos: ReposData[],
    userFollowers: () => void,
    followers: FollowData[],
    userFollowing: () => void,
    following: FollowData[],
    acessUserFollow: (username: string, lastPageName: string) => void,
    auxUser: string | undefined,
    lastPage: string | undefined,
    handleNewUser: () => void
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps): JSX.Element {
    const [user, setUser] = useState<UserData>({} as UserData);
    const [repos, setRepos] = useState<ReposData[]>([{}] as ReposData[]);
    const [followers, setFollowers] = useState<FollowData[]>([{}] as FollowData[]);
    const [following, setFollowing] = useState<FollowData[]>([{}] as FollowData[]);
    const [auxUser, setAuxUser] = useState<string | undefined>();
    const [lastPage, setLastPage] = useState<string | undefined>();
    const history = useHistory();

    async function searchUser(username: string | undefined): Promise<number | void> {
        try {
            return await api.get(`users/${username}`)
                .then(response => {
                    setUser(response.data);
                    return response.data.id;
                });
        } catch {
            toast.error('Username was not found!', {theme: "colored"});
            return 0;
        }
    }

    function logOut() {
        setUser({} as UserData);
        history.push('/');
    }

    async function userRepos() {
        try {
            await api.get(`users/${user.login}/repos`)
                .then(response => setRepos(response.data))
                .then(() => history.push('/repos'));
        } catch {
            toast.error('Something went wrong :(', {theme: "colored"});
        }
    }

    async function userFollowers() {
        try {
            await api.get(`users/${user.login}/followers`)
                .then(response => setFollowers(response.data))
                .then(() => history.push('/followers'))
        } catch {
            toast.error('Something went wrong :(', {theme: "colored"});
        }
    }

    async function userFollowing() {
        try {
            await api.get(`users/${user.login}/following`)
                .then(response => setFollowing(response.data))
                .then(() => history.push('/following'))
        } catch {
            toast.error('Something went wrong :(', {theme: "colored"});
        }
    }

    async function acessUserFollow(username: string, lastPageName: string) {
        setAuxUser(username);
        setLastPage(lastPageName);
        history.push('/auxuser');
    }

    async function handleNewUser() {
        try {
            await api.get(`users/${auxUser}`)
                .then(response => setUser(response.data))
                .then(() => history.push('/user'));
        } catch {
            toast.error('Something went wrong!', {theme: "colored"});
        }
    }

    return (
        <UserContext.Provider
            value={
                {user,
                searchUser,
                logOut,
                userRepos,
                repos,
                userFollowers,
                followers,
                userFollowing,
                following,
                acessUserFollow,
                auxUser,
                lastPage,
                handleNewUser}
            }
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser(): UserContextData {
    const context = useContext(UserContext);

    return context;
}
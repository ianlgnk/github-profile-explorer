import { useUser } from '../../hooks/useUser';

import { Header } from '../../components/User/Header';
import { Main } from '../../components/User/Main';
import { Footer } from '../../components/Footer';

import { Container, PageContainer } from './styles';

export function User() {
    const { user, logOut, lastPage, handleNewUser, userRepos, userFollowers, userFollowing } = useUser();

    return (
        <Container>
            <PageContainer>
                <Header user={user} logOut={logOut} auxUser={undefined} lastPage={lastPage} handleNewUser={handleNewUser} />
                <Main
                    user={user}
                    auxUser={undefined}
                    userRepos={userRepos}
                    userFollowers={userFollowers}
                    userFollowing={userFollowing}
                />
            </PageContainer>
            <Footer />
        </Container>
    );
}
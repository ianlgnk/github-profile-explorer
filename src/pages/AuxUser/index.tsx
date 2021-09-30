import { useUser } from '../../hooks/useUser';

import { Header } from '../../components/User/Header';
import { Main } from '../../components/User/Main';
import { Footer } from '../../components/Footer';

import { Container, PageContainer } from './styles';

export function AuxUser() {
    const { auxUser, lastPage, handleNewUser, userRepos, userFollowers, userFollowing } = useUser();

    return (
        <Container>
            <PageContainer>
                <Header
                    auxUser={auxUser}
                    logOut={() => undefined}
                    user={null}
                    lastPage={lastPage}
                    handleNewUser={handleNewUser}
                />
                <Main
                    user={undefined}
                    auxUser={auxUser}
                    userRepos={userRepos}
                    userFollowers={userFollowers}
                    userFollowing={userFollowing}
                />
            </PageContainer>
            <Footer />
        </Container>
    );
}
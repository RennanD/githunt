import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';
import api from '../../services/api';

import {
    Container,
    Avatar,
    Bio,
    Name,
    Header,
    List,
    Starred,
    OwnerAvatar,
    Info,
    Title,
    Author,
    Loading,
} from './styles';

function User({ navigation }) {
    const user = navigation.getParam('user');

    const [stars, setStars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [refreshing, setRefresh] = useState(false);

    async function loadUser(thisPage = 1) {
        setLoading(true);
        const response = await api.get(
            `/users/${user.login}/starred?page=${thisPage}`
        );
        setStars([...stars, ...response.data]);
        setPage(thisPage);
        setLoading(false);
    }

    useEffect(() => {
        loadUser();
    }, []);

    async function handleRefresh(thisPage = 1) {
        setRefresh(true);
        const response = await api.get(
            `/users/${user.login}/starred?page=${thisPage}`
        );
        setStars(response.data);
        setPage(thisPage);
        setRefresh(false);
    }

    function loadMore() {
        setLoading(true);
        const pageNumber = page + 1;

        loadUser(pageNumber);
        setLoading(false);
    }

    function handleNavigation(star) {
        navigation.navigate('Star', { star });
    }

    return (
        <Container>
            <Header>
                <Avatar source={{ uri: user.avatar }} />
                <Name> {user.name} </Name>
                <Bio> {user.bio} </Bio>
            </Header>

            {loading ? (
                <Loading>
                    <ActivityIndicator color="#fff" size={28} />
                </Loading>
            ) : (
                <List
                    data={stars}
                    keyExtractor={star => String(star.id)}
                    onEndReachedThreshold={0.4}
                    onEndReached={loadMore}
                    onRefresh={handleRefresh}
                    refreshing={refreshing}
                    renderItem={({ item }) => (
                        <Starred onPress={() => handleNavigation(item)}>
                            <OwnerAvatar
                                source={{ uri: item.owner.avatar_url }}
                            />
                            <Info>
                                <Title> {item.name} </Title>
                                <Author> {item.owner.login} </Author>
                            </Info>
                        </Starred>
                    )}
                />
            )}
        </Container>
    );
}

User.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
});

export default User;

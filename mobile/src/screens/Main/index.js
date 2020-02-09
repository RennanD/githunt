import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Keyboard, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
    Container,
    Form,
    Input,
    SubmitButton,
    List,
    User,
    Avatar,
    Name,
    Bio,
    ProfileButton,
    ProfileText,
} from './styles';

export default function Main({ navigation }) {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadUsers() {
            const myUsers = await AsyncStorage.getItem('users');
            if (myUsers) setUsers(JSON.parse(myUsers));
        }
        loadUsers();
    }, []);

    useEffect(() => {
        async function addUsers() {
            await AsyncStorage.setItem('users', JSON.stringify(users));
        }

        addUsers();
    }, [users]);

    function handleNavigation(user) {
        const { navigate } = navigation;
        navigate('User', { user });
    }

    async function handleSubmit() {
        setLoading(true);
        const response = await api.get(`/users/${newUser}`);
        const data = {
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url,
        };
        setUsers([...users, data]);

        setNewUser('');
        Keyboard.dismiss();
        setLoading(false);
    }

    return (
        <Container>
            <Form>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Digite o nome do usuário"
                    value={newUser}
                    onChangeText={text => {
                        setNewUser(text);
                    }}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit}
                />
                <SubmitButton loading={loading} onPress={handleSubmit}>
                    {loading ? (
                        <ActivityIndicator color="#fefefe" size={20} />
                    ) : (
                        <Icon name="add" size={20} color="#fff" />
                    )}
                </SubmitButton>
            </Form>

            <List
                data={users}
                keyExtractor={item => String(item.login)}
                renderItem={({ item }) => (
                    <User>
                        <Avatar source={{ uri: item.avatar }} />
                        <Name> {item.name} </Name>
                        <Bio> {item.bio} </Bio>
                        <ProfileButton
                            onPress={() => {
                                handleNavigation(item);
                            }}
                        >
                            <ProfileText>Ver perfil</ProfileText>
                        </ProfileButton>
                    </User>
                )}
            />
        </Container>
    );
}

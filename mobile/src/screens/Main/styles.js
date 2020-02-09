import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    background: #292a2e;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-bottom-color: #333;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#eee',
})`
    flex: 1;
    height: 40px;
    border-radius: 4px;
    background: #333;
    padding: 0 15px;
    border: 1px solid #333;
    color: #fefefe;
`;

export const SubmitButton = styled(RectButton)`
    align-items: center;
    justify-content: center;
    background: #2196f3;
    padding: 10px;
    margin-left: 10px;
    border-radius: 4px;
    opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: {
        padding: 20,
    },
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;
export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #333;
`;
export const Name = styled.Text`
    font-size: 14px;
    color: #fefefe;
    font-weight: bold;
    margin-top: 5px;
    text-align: center;
`;
export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    color: #f2f2f2;
    font-size: 13px;
    line-height: 18px;
    margin-top: 5px;
    text-align: center;
`;
export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: #2196f3;
    height: 36px;
`;
export const ProfileText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fefefe;
    text-transform: uppercase;
`;

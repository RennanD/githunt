import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #292a2e;
`;
export const Header = styled.View`
    align-items: center;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #333;
`;
export const Avatar = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    background: #333;
`;
export const Name = styled.Text`
    font-size: 20px;
    color: #fefefe;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
`;
export const Bio = styled.Text`
    font-size: 14px;
    line-height: 18px;
    color: #f2f2f2;
    margin-top: 5px;
    text-align: center;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const Starred = styled.TouchableOpacity`
    background: #222;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;
export const OwnerAvatar = styled.Image`
    height: 42px;
    width: 42px;
    border-radius: 4px;
    background: #333;
`;
export const Info = styled.View`
    margin-left: 10px;
    flex: 1px;
`;
export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
    color: #fefefe;
    font-size: 15px;
    font-weight: bold;
`;
export const Author = styled.Text`
    color: #f2f2f2;
    font-size: 13px;
    margin-top: 2px;
`;

export const Loading = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

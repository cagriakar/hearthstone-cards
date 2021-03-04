import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RenderItem from '../../components/RenderItem';
import searchByName from '../../utils/searchByName';

const SearchModalScreen = () => {
    const { goBack } = useNavigation();

    const [cardName, setCardName] = useState(null);
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        const foundCardList = searchByName(cardName);
        setCardList(foundCardList);
    }, [cardName]);

    const handleOnPress = () => {
        alert('The End');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.root}>
                <Icon
                    name="search"
                    size={25}
                    borderRadius={50}
                    onPress={() => navigate('SearchModal')}
                    backgroundColor="white"
                    color="#991DB5"
                    style={{ position: 'absolute', left: 30, top: 8 }}
                />
                <TextInput
                    placeholder="Type here..."
                    style={styles.textInput}
                    autoFocus
                    onChangeText={(text) => setCardName(text)}
                    value={cardName}
                />
                <Text
                    style={{
                        color: '#991DB5',
                        fontWeight: 'bold'
                    }}
                >
                    Pull down to turn back
                </Text>
            </View>
            <FlatList
                data={cardList}
                renderItem={({ item }) => (
                    <RenderItem item={item} onPress={handleOnPress} />
                )}
                keyExtractor={({ cardId }) => cardId}
                // ItemSeparatorComponent={separatorComponent}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        marginVertical: 20
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: '#991DB5',
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingLeft: '10%',
        marginBottom: 10
    }
});

export default SearchModalScreen;

import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RenderItem from '../../components/RenderItem';
import useDebounce from '../../utils/hooks/useDebounce';
import useSearchByCardName from '../../utils/hooks/useSearchByCardName';
import LoadingSpinner from '../../components/LoadingSpinner';

const SearchModalScreen = () => {
    // const { goBack } = useNavigation();

    const [cardName, setCardName] = useState(null);

    const searchTerm = useDebounce(cardName, 300);

    const { cardList, isLoading } = useSearchByCardName(searchTerm);

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
            {isLoading && cardName?.length > 0 && <LoadingSpinner />}
            {cardList && (
                <FlatList
                    data={cardList}
                    renderItem={({ item }) => (
                        <RenderItem item={item} onPress={handleOnPress} />
                    )}
                    keyExtractor={({ cardId }) => cardId}
                    // ItemSeparatorComponent={separatorComponent}
                />
            )}
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

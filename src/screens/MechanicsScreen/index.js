import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RenderItem from '../../components/RenderItem';
import data from '../../mock/mockData/mockData';
import consumeMechanics from '../../utils/consumeMechanics';

const MechanicsScreen = () => {
    const { navigate } = useNavigation();

    const mechanics = consumeMechanics(data);

    const handleOnPress = (item) => {
        navigate('Cards', { mechanic: item });
    };

    return (
        <SafeAreaView>
            <View style={styles.button}>
                <Icon.Button
                    name="search"
                    size={35}
                    borderRadius={50}
                    onPress={() => navigate('SearchModal')}
                    backgroundColor="white"
                    color="black"
                    iconStyle={{ paddingLeft: 0, marginRight: 0 }}
                />
            </View>
            <FlatList
                data={mechanics}
                renderItem={({ item }) => (
                    <RenderItem
                        item={item}
                        onPress={() => handleOnPress(item)}
                    />
                )}
                keyExtractor={(mechanic) => mechanic}
                // ItemSeparatorComponent={separatorComponent}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        position: 'absolute',
        zIndex: 100,
        bottom: 50,
        right: 50,
        opacity: 0.9
    }
});

export default MechanicsScreen;

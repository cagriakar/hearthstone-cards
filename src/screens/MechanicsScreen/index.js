import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoadingSpinner from '../../components/LoadingSpinner';
import RenderItem from '../../components/RenderItem';
import useCards from '../../utils/hooks/useCards';

const MechanicsScreen = () => {
    const { navigate } = useNavigation();

    const { mechanics, isLoading } = useCards();

    const handleOnPress = (item) => {
        navigate('Cards', { mechanic: item });
    };

    return (
        <SafeAreaView>
            <View>
                {isLoading && <LoadingSpinner />}
                {mechanics && (
                    <>
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
                    </>
                )}
            </View>
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

import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const RenderItem = ({ item, onPress }) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0.4, 1]}
            colors={['#E235EE', '#991DB5']}
            style={styles.background}
        >
            <TouchableHighlight
                activeOpacity={0.65}
                underlayColor="#E235EE"
                onPress={onPress}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    locations={[0.1, 0.5, 0.9]}
                    colors={['#991DB5', '#E235EE', '#991DB5']}
                    style={styles.row}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            textTransform: 'uppercase'
                        }}
                    >
                        {item?.name ?? item}
                    </Text>
                </LinearGradient>
            </TouchableHighlight>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    background: {
        borderRadius: 5,
        marginVertical: 2,
        paddingHorizontal: 4,
        paddingVertical: 6
    },
    row: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 30,
        borderWidth: 0.1,
        borderColor: 'black'
    }
});

export default RenderItem;

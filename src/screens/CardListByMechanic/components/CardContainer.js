import React, { useRef, useState } from 'react';
import {
    Animated,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';

const CardContainer = ({ item }) => {
    const isImgAvailable = !!item.img;

    const [isFlipped, setIsFlipped] = useState(false);

    const flip = useRef(new Animated.Value(0)).current;

    const interpolateFront = flip.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
    });

    const interpolateBack = flip.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
    });

    const handleFlip = () => {
        Animated.timing(flip, {
            duration: 300,
            toValue: isFlipped ? 180 : 0,
            useNativeDriver: true
        }).start();
        setIsFlipped((isFlipped) => !isFlipped);
    };

    return (
        <View style={styles.root}>
            <Animated.View
                style={[
                    { transform: [{ rotateY: interpolateFront }] },
                    styles.hidden
                ]}
            >
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={handleFlip}
                >
                    {isImgAvailable ? (
                        <View style={styles.card}>
                            <ImageBackground
                                source={{ uri: item?.img }}
                                style={styles.image}
                            />
                        </View>
                    ) : (
                        <View style={[styles.card, styles.cardBack]}>
                            <Image
                                resizeMethod="scale"
                                source={require('../../../assets/images/cardBack.png')}
                                style={[styles.image, { opacity: 0.4 }]}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>No</Text>
                                <Text style={styles.text}>Available</Text>
                                <Text style={styles.text}>Image</Text>
                            </View>
                        </View>
                    )}
                </TouchableHighlight>
            </Animated.View>
            <Animated.View
                style={[
                    styles.back,
                    styles.hidden,
                    { transform: [{ rotateY: interpolateBack }] }
                ]}
            >
                <TouchableOpacity activeOpacity={1} onPress={handleFlip}>
                    <View style={[styles.card, styles.cardBack]}>
                        <Image
                            resizeMethod="scale"
                            source={require('../../../assets/images/cardBack.png')}
                            style={[styles.image, { opacity: 0.4 }]}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Basic Card Info</Text>
                            <Text style={styles.text}>{`Name: ${
                                item.name ?? 'N/A'
                            }`}</Text>
                            <Text style={styles.text}>{`Card Set: ${
                                item.cardSet ?? 'N/A'
                            }`}</Text>
                            <Text style={styles.text}>{`Type: ${
                                item.type ?? 'N/A'
                            }`}</Text>
                            <Text style={styles.text}>{`Faction: ${
                                item.faction ?? 'N/A'
                            }`}</Text>
                            <Text style={styles.text}>{`Rarity: ${
                                item.rarity ?? 'N/A'
                            }`}</Text>
                            <Text style={styles.text}>{`Class: ${
                                item.playerClass ?? 'N/A'
                            }`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        width: 250,
        height: 350
    },
    cardBack: {
        paddingRight: 16,
        paddingLeft: 5,
        paddingTop: 42,
        paddingBottom: 6,
        position: 'relative'
    },
    textContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: 35,
        opacity: 1,
        marginTop: '10%'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#991DB5'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#991DB5'
    },
    root: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        resizeMode: 'stretch',
        width: '100%',
        height: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        marginRight: -10,
        marginTop: -10
    },
    hidden: { backfaceVisibility: 'hidden' },
    back: { position: 'absolute' }
});

export default CardContainer;

import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const LoadingSpinner = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <ActivityIndicator size="large" color="#991DB5" />
        </View>
    );
};

export default LoadingSpinner;

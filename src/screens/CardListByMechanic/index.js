import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import data from '../../mock/mockData/mockData';
import consumeByMechanic from '../../utils/consumeByMechanic';
import CardContainer from './components/CardContainer';

const CardsListByMechanic = () => {
    const {
        params: { mechanic }
    } = useRoute();

    const cards = consumeByMechanic(data, mechanic);

    return (
        <FlatList
            data={cards}
            renderItem={({ item }) => <CardContainer item={item} />}
            keyExtractor={(card) => card.cardId}
            // ItemSeparatorComponent={separatorComponent}
        />
    );
};

export default CardsListByMechanic;

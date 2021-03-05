import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import filterByMechanic from '../../utils/filterByMechanic';
import useCards from '../../utils/hooks/useCards';
import CardContainer from './components/CardContainer';

const CardsListByMechanic = () => {
    const {
        params: { mechanic }
    } = useRoute();

    const { cards, isLoading } = useCards();
    const cardsByMechanic = filterByMechanic(cards, mechanic);

    return (
        <FlatList
            data={cardsByMechanic}
            renderItem={({ item }) => <CardContainer item={item} />}
            keyExtractor={(card) => card.cardId}
            // ItemSeparatorComponent={separatorComponent}
        />
    );
};

export default CardsListByMechanic;

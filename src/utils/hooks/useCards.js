import useSWR from 'swr';
import consumeMechanics from '../consumeMechanics';
import swrFetcher from '../swrFetcher';

export default function useCards() {
    const { data, error } = useSWR(`/cards`, swrFetcher);

    return {
        cards: Object.values(data ?? {}).flat(),
        mechanics: consumeMechanics(data),
        isLoading: !error && !data,
        isError: error
    };
}

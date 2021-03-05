import useSWR from 'swr';
import swrFetcher from '../swrFetcher';

export default function useSearchByCardName(searchTerm) {
    const { data, error } = useSWR(
        searchTerm ? `/cards/search/${searchTerm}` : null,
        swrFetcher
    );

    return {
        cardList: data,
        isLoading: !error && !data,
        isError: error
    };
}

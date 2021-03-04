import data from '../mock/mockData/mockData';

const searchByName = (cardName) => {
    return Object.values(data)
        .flat()
        .filter(({ name }) =>
            name.toLowerCase().includes(cardName?.toLowerCase())
        );
};
export default searchByName;

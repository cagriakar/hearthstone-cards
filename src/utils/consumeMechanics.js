const consumeMechanics = (data = []) => {
    const mechanicsReducer = (acc, cards) => {
        const { mechanics } = cards;

        if (mechanics) {
            return [...acc, ...mechanics.map(({ name }) => name)];
        }

        return acc;
    };

    const mechanics = [
        ...new Set(Object.values(data).flat().reduce(mechanicsReducer, []))
    ];

    return mechanics;
};

export default consumeMechanics;

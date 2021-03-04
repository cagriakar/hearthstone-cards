const hasTheMechanic = (chosenMechanicParam) => (mechanicsParam = []) => {
    return mechanicsParam.map(({ name }) => name).includes(chosenMechanicParam);
};

const consumeByMechanic = (data, chosenMechanic) => {
    const byMechanic = (cards) => {
        const { mechanics } = cards;

        const hasChosenMechanic = hasTheMechanic(chosenMechanic);

        return hasChosenMechanic(mechanics);
    };

    const cards = Object.values(data).flat().filter(byMechanic);

    return cards;
};

export default consumeByMechanic;

const hasTheMechanic = (chosenMechanicParam) => (mechanicsParam = []) => {
    return mechanicsParam.map(({ name }) => name).includes(chosenMechanicParam);
};

const filterByMechanic = (data, chosenMechanic) => {
    const byMechanic = (cards) => {
        const { mechanics } = cards;

        const hasChosenMechanic = hasTheMechanic(chosenMechanic);

        return hasChosenMechanic(mechanics);
    };

    const cards = data.filter(byMechanic);

    return cards;
};

export default filterByMechanic;

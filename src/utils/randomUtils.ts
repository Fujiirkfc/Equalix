export const getRandomOperator = (): string => {
    const randomOperator = Math.floor(Math.random() * 2) + 1;
    switch (randomOperator) {
        case 1:
            return '+';
        case 2:
            return '-';
        default:
            return '+';
    }
}

export const getRandomNumber = (): number => {
    return Math.floor(Math.random() * 100) + 1;
}

export const getEquation = (): string => {
    return `${getRandomNumber()}${getRandomOperator()}${getRandomNumber()}`
}
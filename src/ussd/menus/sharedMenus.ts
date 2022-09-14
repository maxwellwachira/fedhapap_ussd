const languageMenu = () => {
    return `CON Karibu!! Chagua Lugha
        1. English
        2. Swahili
    `;
}


const goBack = (text: string) => {
    const textArray = text.split("*");
    while (textArray.includes('98')) {
        let firstIndex = textArray.indexOf('98');
        textArray.splice(firstIndex-1, 2);
    }
    return textArray.join('*');
}

const goToMainMenu = (text: string) => {
    const textArray = text.split("*");
    while (textArray.includes('99')) {
        let firstIndex = textArray.indexOf('99');
        textArray.splice(firstIndex+1);
    }
    return textArray.join('*');
}


export {
    goBack,
    goToMainMenu,
    languageMenu
};
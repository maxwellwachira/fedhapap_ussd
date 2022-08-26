const languageMenu = () => {
    return `CON Karibu!! Chagua Lugha
        1. English
        2. Kiswahili
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
    while (textArray.includes('00')) {
        let firstIndex = textArray.indexOf('00');
        textArray.splice(firstIndex+1);
    }
    return textArray.join('*');
}


export {
    goBack,
    goToMainMenu,
    languageMenu
};
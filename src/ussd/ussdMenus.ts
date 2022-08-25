
const mainMenuRegistered = (name: string) => {
    const response = `CON Welcome ${name}. Reply with:
        1. Send Money
        2. Withdraw
        3. Check Balance
    `
    return response;
}

const mainMenuUnRegistered = () => {
    const response = `CON Welcome to Fedha Pap . Reply with:
        1. Register
        2. Exit
    `
    return response;
}

const registerMenu = (textArray: Array<string>, phoneNumber: string) => {
    let level = textArray.length;
    let response = "";
    if(level === 1){
        response = `CON Please enter your full name: `;
    }else if(level === 2){
        response = `CON Please enter set you PIN: `;
    }else if(level == 3){
        response = `CON Please re-enter your PIN: `;
    }else if(level === 4) {
        const name = textArray[1];
        const pin = textArray[2];
        const confirmPin = textArray[3];
        console.log(textArray);
        if(pin != confirmPin){
            response = `END Your pins do not match. Please try again`;
        }else {
            response = `END You have been registered`;
        }
    }

    return response;
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
    mainMenuRegistered,
    mainMenuUnRegistered,
    registerMenu
}
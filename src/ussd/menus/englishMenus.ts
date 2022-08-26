class EnglishMenus {

    mainMenuRegistered(name: string, isUserVerified: boolean){
        let response = "";
        isUserVerified ? 
            response =  `CON  Welcome ${name}. Reply with: 
                1. Account
                2. Send Money
                3. E-loan
                4. Pay Bills
            `: 
            response = `END Dear ${name}, you will receive an SMS once verification process is done`;

        return response;
    }

    mainMenuUnRegistered(){
        return`CON Welcome to Fedha Pap . Reply with:
            1. Register
            2. Exit
        `;
    }

    registerMenu(textArray: Array<string>, phoneNumber: string){
        let level = textArray.length;
        let response = "";

        switch(level) {
            case 2:
                response = `CON Please enter your full name: `;
                break;
            case 3:
                response = `CON Please enter set you PIN: `;
                break;
            case 4:
                response = `CON Please re-enter your PIN: `;
                break;
            case 5:
                const name = textArray[2];
                const pin = textArray[3];
                const confirmPin = textArray[4];
                //console.log(textArray);

                pin != confirmPin ? 
                    response = `END Your pins do not match. Please try again` :
                    response = `END You have been registered`;
                break;
            default: 
                response = `END Invalid Entry`;
                break;
        }

        return response;
    }

    mainMenuAccount(){
        return `CON Select where to send money to:
            1. Check Balance
        `;
    }

    account(textArray: Array<string>, phoneNumber: string){
        let level = textArray.length;
        let response = "";

        switch (level) {
            case 2:
                response = this.mainMenuAccount();
                break;

        
            default:
                break;
        }

        return response;
    }

    mainMenuSendMoney (){
        return `CON Select where to send money to:
            1. My Number
            2. Other Number
        `;
    }

    sendMoney (textArray: Array<string>, phoneNumber: string){
        let level = textArray.length;
        let response = "";

        switch(level){
            case 2:
                response = this.mainMenuSendMoney()
                break;
            case 3:
                textArray[2] === '1' ?
                    response = `CON Enter amount: ` :
                    response = `CON Enter mobile number of the receiver: `;
                break;
            case 4:
                textArray[2] === '1' ?
                    response = `CON Enter Pin: ` :
                    response = `CON Enter amount: `;
                break;
            case 5:
                textArray[2] === '1' ?
                    response = `CON Send Ksh. ${textArray[3]} to ${phoneNumber}: 
                        1. Confirm
                        2. Cancel
                    `:
                    response = `CON Enter Pin: `;
                break;
            case 6:
                if(textArray[2] === '1' && textArray[5] === '1'){

                }else if (textArray[2] === '1' && textArray[5] === '2') {
                    response = 'END Canceled. Thank you for using our service';
                }else if (textArray[2] === '2'){
                    response = `CON Send Ksh. ${textArray[4]} to ${textArray[3]}: 
                        1. Confirm
                        2. Cancel
                    `;
                } else{
                    response = `Invalid entry`;
                }
                break;

            case 7:
                if(textArray[2] === '2' && textArray[6] === '1'){

                }else if (textArray[2] === '2' && textArray[6] === '2') {
                    response = 'END Canceled. Thank you for using our service';
                } else{
                    response = `Invalid entry`;
                }
                break;
            default:
                response = `Invalid entry`;
                break;

        }
        return response;
    }
}

export default new EnglishMenus();
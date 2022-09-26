import { registerUser } from "../ussdService";

class EnglishMenus {

    mainMenuRegistered(name: string, isUserVerified: boolean){
        let response = "";
        isUserVerified ? 
            response =  `CON  Welcome ${name}. Reply with: 
                1. Account
                2. Withdraw Cash
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

    async registerMenu(textArray: Array<string>, phoneNumber: string){
        let level = textArray.length;
        let response = "";

        switch(level) {
            case 2:
                response = `CON Please enter your full name: `;
                break;
            case 3: 
                response = `CON Please enter your National ID Number: `;
                break;
            case 4: 
                response = `CON Please enter your Title Deed Number: `;
                break;
            case 5:
                response = `CON Please enter set you PIN: `;
                break;
            case 6:
                response = `CON Please re-enter your PIN: `;
                break;
            case 7:
                const name = textArray[2];
                const idNo = textArray[3];
                const titleDeedNo = textArray[4];
                const pin = textArray[5];
                const confirmPin = textArray[6];
                //console.log(textArray);

                if(pin != confirmPin){
                    return `END Your pins do not match. Please try again`;
                }
                
                const user = await registerUser(name, idNo, titleDeedNo, pin, phoneNumber);
                
                user?.phoneNumberConfirmed ? 
                    response = `END You have been registered`:
                    response = `END An error has occurred`;

                break;
            default: 
                response = `END Invalid Entry`;
                break;
        }

        return response;
    }

    account(textArray: Array<string>, phoneNumber: string){
        let level = textArray.length;
        let response = "";

        switch (level) {
            case 2:
                response = `CON Reply with:
                    1. Check Balance
                `;
                break;
            case 3: 
                response = `END To be implemented`;
                break;
            default:
                response = `END Invalid entry`;
                break;
        }

        return response;
    }

    sendMoney (textArray: Array<string>, phoneNumber: string){
        let level = textArray.length;
        let response = "";

        switch(level){
            case 2:
                response = `CON Enter amount: `;
                break;
            case 3:
                response = `CON Enter Pin: `;
                break;
            case 4:
                response = `CON Send Ksh. ${textArray[2]} to ${phoneNumber}: 
                    1. Confirm
                    2. Cancel
                `;
                break;
            case 6:
                if(textArray[3] === '1'){
                    response = `END To be implemented`;
                }else if (textArray[3] === '2') {
                    response = 'END Cancelled. Thank you for using our service';
                } else{
                    response = `END Invalid entry`;
                }
                break;
            default:
                response = `END Invalid entry`;
                break;

        }
        return response;
    }
}

export default new EnglishMenus();
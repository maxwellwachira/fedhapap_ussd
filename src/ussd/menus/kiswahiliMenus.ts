
class KiswahiliMenus {

    mainMenuRegistered(name: string, isUserVerified: boolean){
        let response = "";
        isUserVerified ? 
            response = `CON Karibu ${name}. Chagua:
                1. Akaunti
                2. Tuma Pesa
                3. Kopa
                4. Lipa na Fedha Pap
            `: 
            response = `END Mpendwa ${name}, utapokea ujumbe baada ya kuthibitisha akaunti yako`;

        return response;
    }

    mainMenuUnRegistered(){
        return`CON Karibu Kwenye Fedha Pap . Chagua:
            1. Jiandikishe
            2. Toka
        `;
    }

    registerMenu(textArray: Array<string>, phoneNumber: string){
        let level = textArray.length;
        let response = "";
        if(level === 2){
            response = `CON Andika jina lako: `;
        }else if(level === 3){
            response = `CON andika pini yako: `;
        }else if(level == 4){
            response = `CON andika pini yako tena: `;
        }else if(level === 5) {
            const name = textArray[2];
            const pin = textArray[3];
            const confirmPin = textArray[4];
            console.log(textArray);
            if(pin != confirmPin){
                response = `END Pini zako hazifanani, jaribu tena`;
            }else {
                response = `END umesajiliwa kikamilifu`;
            }
        }

        return response;
    }

    account(textArray: Array<string>, phoneNumber: string){
        let level = textArray.length;
        let response = "";

        switch (level) {
            case 2:
                response = `CON Jibu Kwa:
                    1. Angalia Mabaki
                `;
                break;
            case 3: 
                response = `END Inakuja hivi karibuni!!`;
                break;
            default:
                response = `END Chaguo lako sio sahihi. Jaribu tena`;
                break;
        }

        return response;
    }

    sendMoney (textArray: Array<string>, phoneNumber: string){
        let level = textArray.length;
        let response = "";

        switch(level){
            case 2:
                response = `CON Chagua mahali utatuma pesa:
                    1. Nambari yangu
                    2. Nambari Nyingine
                `;
                break;
            case 3:
                textArray[2] === '1' ?
                    response = `CON Weka Kiasi cha pesa: ` :
                    response = `CON Weka nambari ambapo utatuma pesa: `;
                break;
            case 4:
                textArray[2] === '1' ?
                    response = `CON Weka pini: `:
                    response = `CON Weka Kiasi cha pesa: `;
                break;
            case 5:
                textArray[2] === '1' ?
                    response = `CON Tuma Ksh. ${textArray[3]} kwa ${phoneNumber}: 
                        1. Kubali
                        2. Kataa
                    `:
                    response = `CON Weka pini: `;
                break;
            case 6:
                if(textArray[2] === '1' && textArray[5] === '1'){
                    response = `END Inakuja hivi karibuni!!`;
                }else if (textArray[2] === '1' && textArray[5] === '2') {
                    response = 'END Umekataa. Shukrani kwa kutumia huduma zetu';
                }else if (textArray[2] === '2'){
                    response = `CON Tuma Ksh. ${textArray[3]} kwa ${phoneNumber}: 
                        1. Kubali
                        2. Kataa
                    `;
                } else{
                    response = `END Chaguo lako sio sahihi. Jaribu tena`;
                }
                break;

            case 7:
                if(textArray[2] === '2' && textArray[6] === '1'){
                    response = `END Inakuja hivi karibuni!!`;
                }else if (textArray[2] === '2' && textArray[6] === '2') {
                    response = 'END Umekataa. Shukrani kwa kutumia huduma zetu';
                } else{
                    response = `END Chaguo lako sio sahihi. Jaribu tena`;
                }
                break;
            default:
                response = `END Chaguo lako sio sahihi. Jaribu tena`;
                break;

        }
        return response;
    }

}

export default new KiswahiliMenus();


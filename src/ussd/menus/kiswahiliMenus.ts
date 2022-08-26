
class KiswahiliMenus {

    mainMenuRegistered(name: string, isUserVerified: boolean){
        let response = "";
        isUserVerified ? 
            response = `CON Karibu ${name}. Jibu na:
                1. Akaunti
                2. Tuma Pesa
                3. Kopa
                4. Lipa na Fedha Pap
            `: 
            response = `END Mpendwa ${name}, utapokea ujumbe baada ya kuthibitisha akaunti yako`;

        return response;
    }

    mainMenuUnRegistered(){
        return`CON Karibu Kwenye Fedha Pap . Jibu na:
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
}

export default new KiswahiliMenus();
import { Request, Response } from 'express';

import { findUserByPhoneNumber } from './ussdService';
import {
    EnglishMenus,
    KiswahiliMenus,
    languageMenu,
} from './menus';
import { menuMiddleware } from './ussdMiddleware';


const listener = async (req: Request, res: Response) => {
    let { sessionId, serviceCode, phoneNumber, text } = req.body;
    text = menuMiddleware(text);
    let isUserRegistered = false;
    let isUserVerified = false;
    let name = "";
    let response = "";

    const user = await findUserByPhoneNumber(phoneNumber);
   
    if(user?.phoneNumberConfirmed){
        isUserRegistered = true;
        name = user.userName;
    }

    if(user?.isActive){
        isUserVerified = true;
    }

    if(text === ""){
        //first menu to select language
        response = languageMenu();

    } else if (text != ""){
        const textArray = text.split("*");
       
        if(textArray.length === 1){
          switch(textArray[0]){
            case '1': //English Language
                isUserRegistered ? 
                    response = EnglishMenus.mainMenuRegistered(name, isUserVerified) : 
                    response = EnglishMenus.mainMenuUnRegistered();
                break;
            case '2': //Kiswahili Language
                isUserRegistered ? 
                    response = KiswahiliMenus.mainMenuRegistered(name, isUserVerified) : 
                    response = KiswahiliMenus.mainMenuUnRegistered();
                break;
            default:
                response = `END Invalid choice. Please try again`;
                break;
          }
        }else if(textArray.length > 1 && !isUserRegistered){
            switch (textArray[1]){
                case '1': 
                    textArray[0] === '1' ? 
                        response = await EnglishMenus.registerMenu(textArray, phoneNumber) : 
                        response = KiswahiliMenus.registerMenu(textArray, phoneNumber);
                    break;
                case '2':
                    textArray[0] === '1' ? 
                        response = `END Thank you for visiting Fedha Pap` : 
                        response = `END Shukrani kwa kutumia Fedha Pap`;
                    break;
                default: 
                    textArray[0] === '1' ? 
                        response = `END Invalid choice. Please try again` : 
                        response = `END Chaguo lako sio sahihi. Jaribu tena`;
                    break;
            }
        }else if(textArray.length > 1 && isUserRegistered){
          
            switch (textArray[1]) {
                case '1':
                    textArray[0] === '1' ? 
                        response = EnglishMenus.account(textArray, phoneNumber) :
                        response = KiswahiliMenus.account(textArray, phoneNumber)
                    break;
                case '2':
                    textArray[0] === '1' ? 
                        response = EnglishMenus.sendMoney(textArray, phoneNumber) :
                        response = KiswahiliMenus.sendMoney(textArray, phoneNumber);
                    break;
                case '3':
                    textArray[0] === '1' ? 
                        response = `END Coming Soon!`:
                        response = `END Inakuja hivi karibuni!`;
                    break;         
                case '4':
                    textArray[0] === '1' ? 
                        response = `END Coming Soon!`:
                        response = `END Inakuja hivi karibuni!`;
                    break;
                default:
                    textArray[0] === '1' ? 
                        response = `END Invalid choice. Please try again` : 
                        response = `END Chaguo lako sio sahihi. Jaribu tena`;
                    break;
            } 
        }

        if(!response.includes('END')){
            textArray[0] === '1' ? 
                response = response  + `98. Go Back`:
                response = response + `98. Rudi Nyuma`;
        }
        
    }   
    //console.log(text);
    res.set("Content-Type: text/plain");
    res.send(response);


}

export default listener;
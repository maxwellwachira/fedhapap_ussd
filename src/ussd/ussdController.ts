import { Request, Response } from 'express';

import { findUserByPhoneNumber } from './ussdService';
import {
    EnglishMenus,
    goBack,
    goToMainMenu,
    KiswahiliMenus,
    languageMenu,
} from './menus';
import { menuMiddleware } from './ussdMiddleware';


const listener = (req: Request, res: Response) => {
    let { sessionId, serviceCode, phoneNumber, text } = req.body;
    text = menuMiddleware(text);
    let response = "";
    const name = 'Maxwell';
    const isUserRegisterd = findUserByPhoneNumber(phoneNumber);
    const isUserVerified = true;

    if(text === ""){
        //first menu to select language
        response = languageMenu();

    } else if (text != ""){
        const textArray = text.split("*");
       
        if(textArray.length === 1){
          switch(textArray[0]){
            case '1': //English Language
                isUserRegisterd ? 
                    response = EnglishMenus.mainMenuRegistered(name, isUserVerified) : 
                    response = EnglishMenus.mainMenuUnRegistered();
                break;
            case '2': //Kiswahili Language
                isUserRegisterd ? 
                    response = KiswahiliMenus.mainMenuRegistered(name, isUserVerified) : 
                    response = KiswahiliMenus.mainMenuUnRegistered();
                break;
            default:
                response = `END Invalid choice. Please try again`;
                break;
          }
        }else if(textArray.length > 1 && !isUserRegisterd){
            switch (textArray[1]){
                case '1': 
                    textArray[0] === '1' ? 
                        response = EnglishMenus.registerMenu(textArray, phoneNumber) : 
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
        }else if(textArray.length > 1 && isUserRegisterd){
          
            switch (textArray[1]) {
                case '1':
                    response = EnglishMenus.account(textArray, phoneNumber);
                    break;
                case '2':
                    response = EnglishMenus.sendMoney(textArray, phoneNumber);
                    break;
                case '3':
                    response = `END Coming Soon`;
                    break;         
                case '4':
                    response = `END Coming Soon`;
                    break;
                default:
                    textArray[0] === '1' ? 
                        response = `END Invalid choice. Please try again` : 
                        response = `END Chaguo lako sio sahihi. Jaribu tena`;
                    break;
            } 
        }   
    }
       
    console.log(text);
    res.set("Content-Type: text/plain");
    res.send(response);


}

export default listener;
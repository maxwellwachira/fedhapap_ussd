import { Request, Response } from 'express';

import { findUserByPhoneNumber } from './ussdService';
import  {
    goBack,
    goToMainMenu,
    mainMenuRegistered,
    mainMenuUnRegistered,
    registerMenu
} from './ussdMenus';

import { menuMiddleware } from './ussdMiddleware';


const listener = (req: Request, res: Response) => {
    let { sessionId, serviceCode, phoneNumber, text } = req.body;
    text = menuMiddleware(text);
    let response = "";
    const name = 'Maxwell';
    const isUserRegisterd = findUserByPhoneNumber(phoneNumber);

    
    if(text === "" && isUserRegisterd){
        //user is registered and string is empty
        response = mainMenuRegistered(name);
    } else if (text === "" && !isUserRegisterd){
        //user is unregistered and string is is empty
        response = mainMenuUnRegistered();
    } else if (text != "" && !isUserRegisterd){
        //user is unregistered and string is not empty
        const textArray = text.split("*");
        
        switch (textArray[0]) {
            case '1':
                response = registerMenu(textArray, phoneNumber);
                break;
            case '2':
                response = `END Thank you for visiting Fedha Pap`;
                break;
            default:
                response = `END Invalid choice. Please try again`;
                break;
        }
    } else {
        //user is registered and string is not empty
        const textArray = text.split("*");
        switch (textArray[0]) {
            case 1:
                
                break;
            case 2:

                break;
            case 3:
                break;    
            default:
                response = `END Invalid menu`;
               
        }
    }

    res.set("Content-Type: text/plain");
    res.send(response);


}

export default listener;
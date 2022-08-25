import { goBack, goToMainMenu } from "./ussdMenus";

const menuMiddleware = (text: string) => {
    return goBack(goToMainMenu(text));
}

export { menuMiddleware };
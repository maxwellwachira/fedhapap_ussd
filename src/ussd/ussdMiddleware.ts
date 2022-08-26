import { goBack, goToMainMenu } from "./menus";

const menuMiddleware = (text: string) => {
    return goBack(goToMainMenu(text));
}

export { menuMiddleware };
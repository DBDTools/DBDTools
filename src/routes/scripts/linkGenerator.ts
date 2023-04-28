import type { LinkSession } from "../types/linkSesson";
import { ServiceType } from "../types/serviceType";

export function generateNewLink() {
    let url = "https://dbd.tools/"
    return url + createNewId(5) 
}

function createNotExistingLink() {

}

function createNewId(length: Number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
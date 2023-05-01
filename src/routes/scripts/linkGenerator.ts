import { dev } from '$app/environment';

import type { LinkSession } from "../types/linkSession";
import { ServiceType } from "../types/serviceType";

export function generateNewLink() {
    let url = getBaseURL()    
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

function getBaseURL() {
  /* Probably possible to just access the base url somewhere */
  if (dev) {
    return "http://localhost:5173/"
  } else {
    return "https://dbd.tools/"
  }
}
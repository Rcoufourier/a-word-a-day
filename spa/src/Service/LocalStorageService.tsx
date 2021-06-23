import {Translation} from "../models/Translation";
import {DateTime} from "luxon";

export const setLocalStorage = (word: Translation) => {
    localStorage.setItem(word.id, JSON.stringify(word));
};

export const getWordFromLocalStorageById = (id: string) => {
    return localStorage.getItem(id);
};

export const getAllDataFromLocalStorage = () => {
    let items:Translation[] = []
    const keys = Object.keys(localStorage);
    keys.forEach(element => {
        let item = JSON.parse(getWordFromLocalStorageById(element) as string);
        item.createdAt = DateTime.fromISO(item.createdAt);
        items.push(item);
    })
    return items
};
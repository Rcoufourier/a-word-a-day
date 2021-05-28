import {Translation} from "./Translation";
import {DateTime} from "luxon";
import {v4 as uuid} from 'uuid';

export const MockTranslation: Translation[] = [
    {
        id: uuid(),
        word: "Bonjour",
        translatedWord: "Hello",
        createdAt: DateTime.fromObject({year: 2021, month: 5, day: 26})
    },
    {
        id: uuid(),
        word: "Chat",
        translatedWord: "Cat",
        createdAt: DateTime.fromObject({year: 2021, month: 5, day: 28})
    },
    {
        id: uuid(),
        word: "Chien",
        translatedWord: "Dog",
        createdAt: DateTime.fromObject({year: 2021, month: 5, day: 27})
    }
]


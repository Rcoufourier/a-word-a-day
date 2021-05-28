import {DateTime} from "luxon";

export class Translation {

    public id: string;
    public word: string;
    public translatedWord: string;
    public createdAt: DateTime;

    constructor(data : any) {
        this.id = data.id;
        this.word = data.word;
        this.translatedWord = data.translatedWord;
        this.createdAt = data.createdAt;
    }
}

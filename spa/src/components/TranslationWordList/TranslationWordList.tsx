import React, {useState} from "react";
import {Translation} from "../../models/Translation";
import {MockTranslation} from "../../models/MockTranslation";
import {Link} from "react-router-dom";
import TranslationItem from "../TranslationItem/TranslationItem";
import TimeSlide from "../TimeSlide/TimeSlide";


export default function TranslationWordList() {
    const [word, setWord] = useState<Translation[]>(MockTranslation)

    return (
        <>
            <TimeSlide/>
            <div>
            {
                word.map((data: Translation, datakey: any) => <TranslationItem key={datakey} word={data}/>)
            }
            </div>

            <Link to={"/word/add"} className="add-word-button">
                <i className="fas fa-plus"></i>
            </Link>
        </>
    )
}




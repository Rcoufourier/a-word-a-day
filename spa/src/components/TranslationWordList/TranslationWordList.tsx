import React, {useState} from "react";
import {Translation} from "../../models/Translation";
import {MockTranslation} from "../../models/MockTranslation";
import {Link} from "react-router-dom";
import TranslationItem from "../TranslationItem/TranslationItem";
import TimeSlide from "../TimeSlide/TimeSlide";


export default function TranslationWordList() {
    const [word, setWord] = useState<Translation[]>(MockTranslation)
    const {ActualDuration} = useSlider()
    const Now = DateTime.local()
    const Bound = Now.minus(ActualDuration).minus({days: 1})

    return (
        <>
            <TimeSlide/>
            <div>
            {
                word.map((data: Translation, datakey: any) => <TranslationItem key={datakey} word={data}/>)
            }
            </div>
            <Link to={"/word/add"} className="button add-word-button has-background-info-dark">
                <i className="fas fa-plus"></i>
            </Link>
        </>
    )
}




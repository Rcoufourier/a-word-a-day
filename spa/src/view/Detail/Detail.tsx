import React, {useEffect, useState} from "react";
import {Translation} from "../../models/Translation";
import {Link} from "react-router-dom";

import './detail.css';

export default function Detail(props: any) {
    const [word, setWord] = useState<Translation>(props.location.state.word)

    return (
        <div className="word-card">
            <div className="language-container">
                <p className="subtitle">Natif</p>
                <p className="word">{word.word}</p>
            </div>
            <div className="language-container">
                <p className="subtitle">Traduction</p>
                <p className="word">{word.translatedWord}</p>
            </div>
            <Link to={{
                pathname: `/edit/${word.id}`,
                state: {word: word}
            }}>
                Modifier
            </Link>
        </div>
    )
}
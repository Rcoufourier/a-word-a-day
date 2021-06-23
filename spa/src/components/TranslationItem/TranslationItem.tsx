import React from "react";
import {Translation} from "../../models/Translation";
import {Link} from "react-router-dom";
import './TranslationItem.css'

interface ListProps {
    word: Translation
}

export default function TranslationItem({word}: ListProps) {

    return (
        <div className="card has-background-info-dark has-text-white-bis mt-4" data-e2e={"TranslationItem"}>
            <div className="word-container">
                <div>{word.translatedWord}</div>
                <div>{word.word}</div>
            </div>
            <Link to={{
                pathname: `/detail/${word.id}`,
                state: {word: word}
            }}>
                <i className="fas fa-eye has-text-white"/>
            </Link>
        </div>
    );
}


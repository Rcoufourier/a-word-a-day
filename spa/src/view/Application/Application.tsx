import React from "react";
import TranslationWordList from "../../components/TranslationWordList/TranslationWordList";
import {Navbar} from "../../components/Navbar/Navbar";

export function Application ()  {
    return (
        <>
            <Navbar/>
            <TranslationWordList/>
        </>
    );
}

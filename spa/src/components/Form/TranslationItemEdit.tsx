import React, {useState} from "react";
import {useHistory} from "react-router";
import {Translation} from "../../models/Translation";
import {useForm} from "react-hook-form";
import './TranslationItemEdit.css';
import {setLocalStorage} from "../../Service/LocalStorageService";
import {DateTime} from "luxon";

export default function TranslationItemEdit(props: any) {
let history = useHistory()
    const {register, handleSubmit} = useForm<Translation>()
    const [word] = useState<Translation>(props.location.state.word)

    const onSubmit = (data: any) => {
        data.createdAt = DateTime.local()
        setLocalStorage(data)
        history.push("/")
    };

    return (
        <>
            <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("id")}
                    type="hidden"
                    defaultValue={word.id}
                >
                </input>
                <input
                    {...register("word")}
                    type="text"
                    defaultValue={word.word}
                >
                </input>
                <input
                    {...register("translatedWord")}
                    type="text"
                    defaultValue={word.translatedWord}
                >
                </input>
                <button type="submit">Modifier</button>
            </form>
        </>
    );
}
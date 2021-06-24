import React, {useState,} from "react";
import {Translation} from "../../models/Translation";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import './TranslationItemEdit.css';
import {setLocalStorage} from "../../Service/LocalStorageService";
import {DateTime} from "luxon";
import {v4 as uuid} from 'uuid';


export default function TranslationItemAdd() {
    const {register, handleSubmit} = useForm<Translation>()

    const [state, Toggle] = useState({
        display: false,
        message: "",
    })

    const onSubmit = (data: any) => {
        data.createdAt = DateTime.local()
        data.id = uuid();
        let resultString = "Le mot " + data.word + " a bien été ajouté."
        Toggle({display: true, message: resultString})
        setLocalStorage(data)
    };


    return (
        <>
            <form className="edit-form"  onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("id")}
                    type="hidden"
                >
                </input>
                <input
                    {...register("word")}
                    type="text"
                    required
                >
                </input>
                <input
                    {...register("translatedWord")}
                    type="text"
                    required
                >
                </input>
                <button type="submit">Ajouter</button>
            </form>

            {state.display ? <article className="message">
                <div className="message-body">
                    {
                        state.message
                    }
                </div>
            </article> : ""}

            <Link to={'/'} className="button is-link is-centered">
                <i className="fas fa-arrow-left"/>
            </Link>
        </>
    );
}
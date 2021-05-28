import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import {Translation} from "../../models/Translation";
import {useForm} from "react-hook-form";
import {FetchTranslationFrom} from "../../view/Service/TranslationService";

interface FormProps {
    isedit: boolean
}

export default function TranslationItemDetails({isedit}: FormProps) {
    const {register, handleSubmit} = useForm<Translation>()
    const [isEdit, SetEdit] = useState(isedit)
    const [translation, setTranslation] = useState<Translation>()
    const {id} = useParams()

    const onSubmit = (data: any) => {
        if (isEdit) {
            console.log(data)
        } else {
            console.log(data)
        }
    };

    useEffect(() => {
        const data = FetchTranslationFrom(id)
        setTranslation(data)
    })

    console.log(translation)
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("word")}
                    type="text"
                    defaultValue={translation?.word}
                >
                </input>
                <input
                    {...register("translatedWord")}
                    type="text"
                    defaultValue={translation?.translatedWord}
                >
                </input>

                {
                    isEdit ? <button type="submit">Modifier</button> :
                        <button type="submit">Ajouter</button>
                }
            </form>
        </>
    );
}


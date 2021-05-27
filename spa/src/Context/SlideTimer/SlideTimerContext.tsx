import React, {useState} from "react"
import {DateTime, Settings} from "luxon";


type SlideTimerContextType = {
    ActualTimer: DateTime,
    Increase: () => void,
    Decrease: () => void,
}

const SliderTimerContext = React.createContext<SlideTimerContextType>({
    ActualTimer: DateTime.local(),
    Increase: () => {},
    Decrease: () => {}
})

export default SliderTimerContext

type Props = {
    children: React.ReactNode
};

export const SliderTimerProvider = ({children}: Props) => {
    const [ActualTimer, SetTimer] = useState(DateTime.local())

    const Increase = () => {

    }

    const Decrease = () => {

    }

    return (
        <SliderTimerContext.Provider value={{ActualTimer, Increase, Decrease}}>
            {children}
        </SliderTimerContext.Provider>
    )
}



import React, {useState} from "react"
import {DateTime, Duration, Settings, Interval} from "luxon";


type SlideTimerContextType = {
    ActualDuration: Duration,
    DisplayDuration: string,
    CreateDuration: (n: Duration) => void,
    IncreaseInterval: () => void,
    DecreaseInterval: () => void,
}

const SliderTimerContext = React.createContext<SlideTimerContextType>({
    ActualDuration: Duration.fromObject({day: 0}),
    DisplayDuration: "Aujourd'hui",
    IncreaseInterval: () => {
    },
    DecreaseInterval: () => {
    },
    CreateDuration: (n: Duration) => {
    }
})

export default SliderTimerContext

type Props = {
    children: React.ReactNode
};

export const SliderTimerProvider = ({children}: Props) => {

    const [ActualDuration, SetDuration] = useState<Duration>(Duration.fromObject({
        years: 0,
        months: 0,
        weeks: 0,
        days: 0
    }))
    const [DisplayDuration, SetDisplayDuration] = useState("Aujourd'hui")
    const Now = DateTime.local()

    const CreateDuration = (Test: Duration) => {
         if (Test.years) {
             return SetDisplayDuration(Test.years + " an(s)")
         }
         if (Test.months) {
             return SetDisplayDuration(Test.months + " mois")
         }
        if (Test.weeks) {
            return SetDisplayDuration(Test.weeks + " semaine(s)")
        }
        if (Test.days) {
            return SetDisplayDuration(Test.days + " jour(s)")
        }
    }

    const IncreaseInterval = () => {
        const Bound = Now.minus(ActualDuration).minus({days: 1})
        const Duration = Interval.fromDateTimes(Bound, Now).toDuration(["years", "months", "weeks", "days"])
        SetDuration(Duration)
    }

    const DecreaseInterval = () => {
        if (ActualDuration.days != 0
            || ActualDuration.weeks != 0
            || ActualDuration.months != 0
            || ActualDuration.years != 0
        ) {
            const Bound = Now.minus(ActualDuration).plus({days: 1})
            const Duration = Interval.fromDateTimes(Bound, Now).toDuration(["years", "months", "weeks", "days"])
            SetDuration(Duration)
        }
    }
    return (
        <SliderTimerContext.Provider
            value={{DisplayDuration, CreateDuration, ActualDuration, IncreaseInterval, DecreaseInterval}}>
            {children}
        </SliderTimerContext.Provider>
    )

}



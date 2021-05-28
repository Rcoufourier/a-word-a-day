import React from "react"
import {useSlider} from "../../Hooks/Context/useSlider";
import {DateTime} from "luxon";

export default function TimeSlide() {
    const {DisplayDuration, ActualDuration, IncreaseInterval, DecreaseInterval, CreateDuration} = useSlider()

    CreateDuration(ActualDuration)


    return (
        <div className="time-slider">
            <button className="button is-info is-rounded" data-e2e={"increase-timeframe"} onClick={IncreaseInterval}>
                <span className="icon">
                    <i className="fas fa-angle-left"/>
                </span>
            </button>
            <span className="duration">{DisplayDuration}</span>
            <button className="button is-info is-rounded" data-e2e={"decrease-timeframe"} onClick={DecreaseInterval}>
                <span className="icon">
                    <i className="fas fa-angle-right"/>
                </span>
            </button>
        </div>
    )
}
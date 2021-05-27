import React from "react"
import {useSlider} from "../../Hooks/Context/useSlider";
import {DateTime} from "luxon";

export default function TimeSlide() {
  const {ActualTimer,Increase,Decrease} = useSlider()

   return (
       <>
           <button onClick={Decrease}><i className="fas fa-angle-left"></i></button>
           <p>{ActualTimer.setLocale('fr-FR').toLocaleString(DateTime.DATE_FULL)}</p>
           <button onClick={Increase}><i className="fas fa-angle-right"></i></button>
       </>
   )
}
import React from "react";
import SliderTimerContext from "../../Context/SlideTimer/SlideTimerContext";

export const useSlider = () =>
    React.useContext(SliderTimerContext);
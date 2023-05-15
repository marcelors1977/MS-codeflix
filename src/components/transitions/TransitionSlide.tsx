import { Slide, SlideProps } from "@material-ui/core";
import React from "react";

const TransitionSlide = React.forwardRef<any, SlideProps>((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
));

export default TransitionSlide;
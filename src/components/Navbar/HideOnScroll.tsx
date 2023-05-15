import { Slide, useScrollTrigger } from "@material-ui/core";
import useIsSmallWindow from "../hooks/useIsSmallWindow";

const HideOnScroll: React.FunctionComponent = (props) => {
    const trigger = useScrollTrigger();
    const { children } = props;
    const isSmallWindow = useIsSmallWindow();
    return(
        <Slide appear={false} direction="down" in={!isSmallWindow || !trigger}>
            {children as any}
        </Slide>
    );
    
};

export default HideOnScroll;
import { useMediaQuery, useTheme } from "@material-ui/core"
import { MEDIA_QUERY_MOBILE } from "../../theme";

const useIsSmallWindow = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(MEDIA_QUERY_MOBILE));
};

export default useIsSmallWindow;
import { Badge } from "@material-ui/core";
import NotificationIcon from "@material-ui/icons/Notifications";

const Notifications: React.FunctionComponent = () => {
    return (
        <Badge overlap="rectangular" badgeContent={11} color="error">
            <NotificationIcon />
        </Badge>
    );
};

export default Notifications;
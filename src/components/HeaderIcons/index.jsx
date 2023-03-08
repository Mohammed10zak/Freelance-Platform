import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { IconContainer } from "./style";


const HeaderIcons = () => {
  return (
    <>
      <IconContainer data-text="Help">
        <QuestionMarkOutlinedIcon />
      </IconContainer>

      <IconContainer data-text="Direct Contracts">
        <SendOutlinedIcon />
      </IconContainer>

      <IconContainer data-text="Notifications">
        <NotificationsNoneOutlinedIcon />
      </IconContainer>
    </>
  );
};

export default HeaderIcons;

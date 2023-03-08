

import {
  Head,

  Stylednav,
  Stylednotifecation,

} from "./style";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Searchbox from "../Searchbox";
import HeaderUl from "../HeaderUl";
export default function Header({ form }) {
  if (form) {
    return (
      <Stylednav>
        <Head>Freelance Platform</Head>
      </Stylednav>
    );
  } else {
    return (
      <Stylednav>
        <Head>Freelance Platform</Head>
        <div style={{ display: "flex", gap: "180px" }}>
         <HeaderUl/>
          <Stylednotifecation>
            <Searchbox width="300px" />
            <QuestionMarkOutlinedIcon sx={{ margin: "24px 0 0 10px" }} />
            <SendOutlinedIcon sx={{ margin: "24px 0 0 10px" }} />
            <NotificationsNoneOutlinedIcon sx={{ margin: "24px 0 0 10px" }} />
          </Stylednotifecation>
        </div>
      </Stylednav>
    );
  }
}

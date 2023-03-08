

import {
  Head,

  Stylednav,
  Stylednotifecation,

} from "./style";

import Searchbox from "../Searchbox";
import HeaderUl from "../HeaderUl";
import HeaderIcons from "../HeaderIcons";
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
            <HeaderIcons/>
          </Stylednotifecation>
        </div>
      </Stylednav>
    );
  }
}

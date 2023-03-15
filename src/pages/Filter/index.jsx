import Header from "./../../components/Header/index";
import { Container } from "../../global/style";
import BasicTabs from "./FilterTabs";
import { Leftbox, Rightbox } from "./style";
import Footer from "./../../components/Footer/index";
import Filters from "./Filters";

import { motion as mt } from "framer-motion";

const Filter = () => {
  return (
    <mt.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Header />
      <Container>
        <Rightbox>
          <Filters />
        </Rightbox>
        <Leftbox>
          <BasicTabs />
        </Leftbox>
      </Container>
      <Footer />
    </mt.div>
  );
};

export default Filter;

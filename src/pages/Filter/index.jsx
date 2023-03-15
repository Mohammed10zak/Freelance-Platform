import Header from "./../../components/Header/index";
import { Container } from "../../global/style";
import BasicTabs from "./FilterTabs";
import { Leftbox, Rightbox } from "./style";
import Footer from "./../../components/Footer/index";
import Filters from './Filters';
const Filter = () => {
  return (
    <>
      <Header />
      <Container>
        <Rightbox>
          <Filters/>
        </Rightbox>
        <Leftbox>
          <BasicTabs />
        </Leftbox>
      </Container>
      <Footer />
    </>
  );
};

export default Filter;

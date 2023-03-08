import { Styledskill } from "./style";

const Technology = ({ technologiesOfItem }) => {
  return (
    <>
      {technologiesOfItem?.map((techItem, index) => (
        <Styledskill key={index}>{techItem}</Styledskill>
      ))}
    </>
  );
};

export default Technology;

import { useState } from "react";
import { TfiAngleDown, TfiAngleLeft } from "react-icons/tfi";

const Accordion = ({ items }) => {
  const [expendedIndex, setExpendedIndex] = useState(-1);

  //we needed index out of the *MAPING* scope so we used hybrid of unonymous and arrow function for the click event:
  const handleClick = (nextIndex) => {
    expendedIndex === nextIndex
      ? setExpendedIndex(-1)
      : setExpendedIndex(nextIndex);

    // setExpendedIndex((currentExpendedIndex) => {
    //   return currentExpendedIndex === nextIndex ? -1 : nextIndex;
    // });
  };

  const renderedItems = items.map((item, index) => {
    const isExpended = index === expendedIndex;
    const icon = (
      <span>{isExpended ? <TfiAngleDown /> : <TfiAngleLeft />}</span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center coursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpended && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;

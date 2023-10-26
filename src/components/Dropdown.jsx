import { useState } from "react";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    //toggle true/false
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    //which event did the user choose:
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  //  let content = "Select...";
  // if (selection) {
  //   content = selection.label;
  // }

  return (
    <div>
      <div onClick={handleClick}>{value?.label || "Select..."}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdown;

import React from "react";
import {
  Gi3DStairs,
  GiAbstract006,
  GiAbstract009,
  GiAbstract023,
  GiAbstract059,
} from "react-icons/gi";
import Button from "../components/Button";

const ButtonPage = () => {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button success rounded className="mb-5" outline onClick={handleClick}>
          Hi there
          <Gi3DStairs />
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          Mariam
          <GiAbstract006 />
        </Button>
      </div>
      <div>
        <Button warning>
          LOL
          <GiAbstract009 />
        </Button>
      </div>
      <div>
        <Button secondary outline>
          It's Fun
          <GiAbstract023 />
        </Button>
      </div>
      <div>
        <Button primary outline rounded>
          click
          <GiAbstract059 />
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;

import React from "react";
import DiretaFilho from "./DiretaFilho";

export default _ => {
  return (
    <div>
      <DiretaFilho nome="Helena" idade={20} nerd={true} />
      <DiretaFilho nome="João" idade={17} nerd={false} />
    </div>
  );
};

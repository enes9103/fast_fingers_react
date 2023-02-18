import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Word from "./Word";

function TextArea() {
  const words = useSelector((state) => state.speed.word);

  return (
    <div className="flex items-center justify-center my-4 mx-auto h-36 p-4 overflow-hidden "
    >
      <div className="border border-blue-600 w-1/2 h-full text-[32px] p-2 rounded-md overflow-hidden flex flex-wrap"
      >
        {words.map((letter, index) => {
          return (
            <Word index={index} key={index} letter={letter} words={words} />
          );
        })}
      </div>
    </div>
  );
}

export default TextArea;

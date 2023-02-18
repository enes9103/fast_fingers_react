import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Word = ({ index, letter }) => {
  const wordIndex = useSelector((state) => state.speed.wordIndex);
  const selectedLang = useSelector((state) => state.speed.selectedLang);
  const lang = useSelector((state) => state.speed.lang);

  const currentWord = useRef();

  useEffect(() => {
    if (wordIndex === index) {
      currentWord.current.scrollIntoView();
    }
  }, [wordIndex, index]);

  return (
    <div
      ref={currentWord}
      key={index}
      className={`${
        index === wordIndex
          ? "bg-slate-400 font-bold  mx-4 text-black rounded-md px-1 pb-1"
          : "text-indigo-500 inline font-bold  mx-4"
      }
  
    // correct or wrong style
    ${letter.status === "wrong" ? "text-red-500" : ""}
     ${letter.status === "correct" ? "text-green-600 " : ""}
        `}
    >
      {letter[selectedLang ? selectedLang : lang[0]]}
    </div>
  );
};

export default Word;

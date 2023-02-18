import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function Word({ index, letter }) {
  const wordIndex = useSelector((state) => state.speed.wordIndex);
  const selectedLang = useSelector((state) => state.speed.selectedLang);
  const lang = useSelector((state) => state.speed.lang);

  const currentWord = useRef();

  useEffect(() => {
    if (wordIndex === index) {
      currentWord.current.scrollIntoView();
      // console.log(wordIndex);
      // console.log(index);
    }
  }, [wordIndex, index]);

  return (
    <span
      ref={currentWord}
      key={index}
      //hangi yazı üzerinde ise onun style'ı
      className={`${
        //hangi yazı üzerinde ise onun style'ı
        index === wordIndex
          ? "bg-slate-400 h-[3.5rem] font-bold  mx-4 text-black rounded-md "
          : "text-indigo-500 inline font-bold  mx-4"
      }
    
      // correct or wrong style
      ${letter.status === "wrong" ? "text-red-500" : ""}
       ${letter.status === "correct" ? "text-green-500" : ""}
          `}
    >
      {letter[selectedLang ? selectedLang : lang[0]]}
    </span>
  );
}

function TextArea() {
  const words = useSelector((state) => state.speed.word);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "1rem auto",
        height: "150px",
        padding: "1rem",
        overflow: "hidden",
       
      }}
    >
      <div
        style={{
          border: "1px solid blue",
          width: "50%",
          height: "100%",
          fontSize: "2rem",
          padding: "0.5rem",
          borderRadius: "10px",
          overflow: "hidden",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {words.map((letter, index) => {
          // console.log(letter);
          return (
            <Word index={index} key={index} letter={letter} words={words} />
          );
        })}
      </div>
    </div>
  );
}

export default TextArea;

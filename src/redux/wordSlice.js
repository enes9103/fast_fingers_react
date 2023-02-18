import { createSlice } from "@reduxjs/toolkit";
import wordse from "../data";

export const formul = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // karıstırılacak ögeler varsa.
  while (currentIndex !== 0) {
    // biri secilir.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // burada digeriyle degisir.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const wordSlice = createSlice({
  name: "speed",
  initialState: {
    word: formul(wordse),
    lang: ["turkishWord", "englishWord"],
    selectedLang: "",
    inputText: "",
    correctWord: 0,
    wrongWord: 0,
    wordIndex: 0,
    time: 60,
    start: false,
  },
  reducers: {
    setDecreaseTime: (state) => {
      state.time--;
    },
    setSelectedLang: (state, action) => {
      const langFind = state.lang.find((item) => item === action.payload);
      console.log("langFind", langFind);
      state.selectedLang = langFind;
    },
    setGameStart: (state) => {
      state.start = true;
    },
    //inputa yazı yazılmaya basladıgında çalısacak func.
    setInputText: (state, action) => {
      const text = action.payload.trim();
      if (text) {
        state.inputText = action.payload;
        console.log("inputText", state.inputText);
      } else {
        state.inputText = "";
      }
    },
    setKeyPress: (state) => {
      const currentText = state.word[state.wordIndex];

      if (
        state.inputText.trim() === currentText.turkishWord ||
        state.inputText.trim() === currentText.englishWord
      ) {
        state.correctWord++;
        currentText.status = "correct";

        console.log("correctWord ", state.correctWord);
        console.log(currentText);
      } else {
        state.wrongWord++;
        currentText.status = "wrong";

        console.log("wrongword ", state.wrongWord);
        console.log(currentText);
      }
      state.wordIndex++;
      state.inputText = ""; //her bosluktan sonra inputu bosalt
    },
    setReplay: (state) => {
      console.log("setReplay");
      state.inputText = "";
      state.correctWord = 0;
      state.wrongWord = 0;
      state.time = 60;
      state.word = formul(state.word);
      state.wordIndex = 0;
      state.start = false;
    },
  },
});

export const {
  setSelectedLang,
  setInputText,
  setKeyPress,
  setReplay,
  setDecreaseTime,
  setGameStart,
} = wordSlice.actions;
export default wordSlice.reducer;

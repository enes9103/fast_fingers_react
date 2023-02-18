import { createSlice } from "@reduxjs/toolkit";
import wordDatas from "../utils/data";

export const formul = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // mixed words in data
  while (currentIndex !== 0) {
    // random choise
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // change randon text with line word
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
    word: formul(wordDatas),
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
    //handle input func
    setInputText: (state, action) => {
      const text = action.payload.trim();
      if (text) {
        state.inputText = action.payload;
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
      } else {
        state.wrongWord++;
        currentText.status = "wrong";
      }
      state.wordIndex++;
      state.inputText = ""; //emptying the input
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

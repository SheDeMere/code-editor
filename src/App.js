import React from "react";
import CodeBar from "./components/CodeBar/CodeBar";
import {EditorProvider} from "./context/Context";
import s from './App.module.css'
import Header from "./components/header/Header";
import Preview from "./components/Preview/Preview";

function App() {
  return (
    <EditorProvider>
        <div className={s.main}>
            <CodeBar />
            <div className={s.right_block}>
                <Header />
                <Preview />
            </div>
        </div>
    </EditorProvider>
  );
}

export default App;

// const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af"
  },
  {
    label: "Arabic",
    value: "ar"
  },
  {
    label: "Hindi",
    value: "hi"
  },
  {
    label: "Japanese",
    value: "ja"
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[3]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Text</label>
          <input value={text} onChange={e => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        options={options}
        onSelectedChange={setLanguage}
        selected={language}
      />
      <hr />
      <h3 className="ui hedder">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;

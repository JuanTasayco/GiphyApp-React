import { useState } from "react";
import InputSearch from "./GiphyProject/components/InputSearch";
import CardGiphy from "./GiphyProject/components/CardGiphy";
function GiphyApp() {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (event: string) => {
    const newSearch = event.trim().toLowerCase();
    if (!categories.includes(newSearch)) {
      setCategories((c) => [...c, newSearch]);
    }
  };

  return (
    <div className="container mt-5">
      <InputSearch onNewCategory={onAddCategory}></InputSearch>

      {categories.map((name, index) => {
        return (
          <div className={index === 0 ? "mt-1" : "mt-4"} key={index}>
            <h1>{capitalize(name)}</h1>
            <CardGiphy currentSearch={name}></CardGiphy>
          </div>
        );
      })}
    </div>
  );
}

function capitalize(text: string) {
  const textCap = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  return textCap;
}

export default GiphyApp;
/* 
        <button
          onClick={onAddCategory}
          style={{ padding: "8px 13px", borderRadius: "5px" }}
        >
          Agregar
        </button> */

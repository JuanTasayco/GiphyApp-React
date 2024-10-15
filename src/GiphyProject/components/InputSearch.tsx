import { useState } from "react";
import "../../styles/components/input-search.css";

interface InputSearchProps {
  onNewCategory: (category: string) => void;
}

function InputSearch({ onNewCategory }: InputSearchProps) {
  const [valueSearch, valueState] = useState("");

  function handleInput({ target }: React.ChangeEvent<HTMLInputElement>) {
    valueState(() => target.value);
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (valueSearch.trim().length > 0) {
      valueState("");
      onNewCategory(valueSearch);
    }
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        value={valueSearch}
        className="clasesita"
        onInput={handleInput}
        placeholder="Ingresa algo para buscar un gif..."
      ></input>
    </form>
  );
}

export default InputSearch;

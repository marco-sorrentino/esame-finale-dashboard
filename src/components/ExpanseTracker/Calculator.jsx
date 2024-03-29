import { useState } from "react";
import "./expanseTrackerHome.scss";

export const Calculator = () => {
  const [input, setInput] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item, i) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={i}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (
    <div className="wrapper box mt-3 bgAllDiv p-4">
      <div className="show-input">{input}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        {/* clear button */}

        <button
          style={{ borderTopLeftRadius: "10px" }}
          onClick={() => setInput(input.substr(0, input.length - 1))}
        >
          Clear
        </button>

        {/* clear all */}
        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {/* add button */}
        <button
          style={{ borderTopRightRadius: "10px" }}
          onClick={(e) => setInput(input + e.target.value)}
          value="+"
        >
          +
        </button>

        {/* minus btn */}
        <button onClick={(e) => setInput(input + e.target.value)} value="-">
          -
        </button>

        <button onClick={(e) => setInput(input + e.target.value)} value="*">
          *
        </button>

        <button onClick={(e) => setInput(input + e.target.value)} value="/">
          /
        </button>
        {/* "=" btn */}
        <button
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
};

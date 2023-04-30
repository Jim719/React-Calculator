import "./Calculate.css";
import { useState } from "react";
export const CalculateForm = () => {
  const ops = ["/", "*", "+", "-", ".", "%"];

  const [calc, setCalc] = useState("");

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const claerNum = () => {
    setCalc("");
  };
  return (
    <div className="row container justify-content-center mt-3">
      <div className="currOutput ">{calc || "0"}</div>
      <div className=" numberZero mt-3" onClick={() => claerNum()}>
        AC
      </div>
      {/* <div className=" calculator mt-3">±</div> */}
      <div className=" calculator mt-3" onClick={() => updateCalc("%")}>
        %
      </div>
      <div className=" calculator mt-3" style={{color:"rgba(201, 148, 3, 0.747)"}} onClick={() => updateCalc("/")}>
        ÷
      </div>
      <div className=" number mt-3" onClick={() => updateCalc("7")}>
        7
      </div>
      <div className=" number mt-3" onClick={() => updateCalc("8")}>
        8
      </div>
      <div className=" number mt-3" onClick={() => updateCalc("9")}>
        9
      </div>
      <div className=" calculator mt-3" style={{color:"rgba(201, 148, 3, 0.747)"}} onClick={() => updateCalc("*")}>
        *
      </div>
      <div className=" number mt-3" onClick={() => updateCalc("4")}>
        4
      </div>
      <div className=" number mt-3" onClick={() => updateCalc("5")}>
        5
      </div>
      <div className=" number mt-3" onClick={() => updateCalc("6")}>
        6
      </div>
      <div className=" calculator mt-3" style={{color:"rgba(201, 148, 3, 0.747)"}} onClick={() => updateCalc("-")}>
        -
      </div>
      <div className=" number mt-3" onClick={() => updateCalc("1")}>
        1
      </div>
      <div className=" number mt-3" onClick={() => updateCalc("2")}>
        2
      </div>
      <div className=" number mt-3" onClick={() => updateCalc("3")}>
        3
      </div>
      <div className=" calculator mt-3" style={{color:"rgba(201, 148, 3, 0.747)"}} onClick={() => updateCalc("+")}>
        +
      </div>
      <div className=" numberZero mt-3" onClick={() => updateCalc("0")}>
        0
      </div>
      <div className=" number mt-3" onClick={() => updateCalc(".")}>
        .
      </div>
      <div className=" calculator mt-3" style={{color:"rgba(201, 148, 3, 0.747)"}} onClick={() => calculate()}>
        =
      </div>
    </div>
  );
};

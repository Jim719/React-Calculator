import "./Calculate.css";
import { useState } from "react";

function preOutputComplete(operand) {
  if (operand == null) return;
  else {
    console.log(operand);
    return operand;
  }
}

export const CalculateForm = () => {
  const [curNum, setcurNum] = useState("0");
  const [preNum, setpreNum] = useState("0");
  return (
    <div className="row container justify-content-center mt-3">
      <div className="currOutput ">
        <div className="preOutput">{preOutputComplete(preNum)}</div>
        {parseInt(curNum)}
      </div>
      <div className=" calculator mt-3" onClick={() => setcurNum("0")}>
        AC
      </div>
      <div className=" calculator mt-3">±</div>
      <div className=" calculator mt-3">%</div>
      <div className=" calculator mt-3">÷</div>
      <div className=" number mt-3" onClick={() => setcurNum(curNum + "7")}>
        7
      </div>
      <div className=" number mt-3" onClick={() => setcurNum(curNum + "8")}>
        8
      </div>
      <div className=" number mt-3" onClick={() => setcurNum(curNum + "9")}>
        9
      </div>
      <div className=" calculator mt-3">*</div>
      <div className=" number mt-3" onClick={() => setcurNum(curNum + "4")}>
        4
      </div>
      <div className=" number mt-3" onClick={() => setcurNum(curNum + "5")}>
        5
      </div>
      <div className=" number mt-3" onClick={() => setcurNum(curNum + "6")}>
        6
      </div>
      <div className=" calculator mt-3">-</div>
      <div className=" number mt-3" onClick={() => setcurNum(curNum + "1")}>
        1
      </div>
      <div className=" number mt-3" onClick={() => setcurNum(curNum + "2")}>
        2
      </div>
      <div className=" number mt-3" onClick={() => setcurNum(curNum + "3")}>
        3
      </div>
      <div
        className=" calculator mt-3"
        onClick={() => {
          setcurNum(0);
          setpreNum(curNum + "+");
        }}
      >
        +
      </div>
      <div className=" numberZero mt-3" onClick={() => setcurNum(curNum + "0")}>
        0
      </div>
      <div className=" number mt-3">.</div>
      <div className=" calculator mt-3">=</div>
    </div>
  );
};

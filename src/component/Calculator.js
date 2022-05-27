import React, { useState } from "react";
import "../style.css";

const Calculator = () => {
  const [Val, setVal] = useState("");
  const backspace = () =>{
      try {
          setVal(Val.slice(0,-1))
      } catch (error) {
          setVal("")
      }
  }
  const calculate = () => {
      try {
          setVal(eval(Val))
      } catch (error) {
          setVal("error")
      }
  }

  return (
    <>
      <div>
        <div className="container mt-2">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h1 className="text-primary">Calculator</h1>
              <hr />
            </div>
            <div className="col-md-3">
              <p
                className="text-danger text-center bg-warning py-2 shadow"
                style={{ borderRadius: "10px" }}
              >
                Voda Permadi
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div
                className="card p-3 shadow bgPrimary"
                style={{ borderRadius: "10px" }}
              >
                <div
                  className="card pb-5 pt-2 shadow "
                  style={{ borderRadius: "20px" }}
                >
                  <div className="card-body">
                    <div>
                      <input
                        type="text"
                        className="form-control py-3 text-center shadow"
                        value={Val}
                      />
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-5 py-2 shadow" value="1" onClick={ (e) => setVal(Val + e.target.value) }>1</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-5 py-2 shadow" value="2" onClick={ (e) => setVal(Val + e.target.value) }>2</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-5 py-2 shadow" value="3" onClick={ (e) => setVal(Val + e.target.value) }>3</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-4  py-2 shadow" value="C" onClick={ () => backspace() }>C/CE</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-5 py-2 shadow" value="3" onClick={ (e) => setVal(Val + e.target.value) }>3</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-5 py-2 shadow" value="5" onClick={ (e) => setVal(Val + e.target.value) }>5</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-5 py-2 shadow" value="6" onClick={ (e) => setVal(Val + e.target.value) }>6</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-4 py-2 shadow" value="+" onClick={ (e) => setVal(Val + e.target.value) }>+</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-5 py-2 shadow" value="7" onClick={ (e) => setVal(Val + e.target.value) }>7</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-5 py-2 shadow" value="8" onClick={ (e) => setVal(Val + e.target.value) }>8</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-5 py-2 shadow" value="9" onClick={ (e) => setVal(Val + e.target.value) }>9</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-4 py-2 shadow" value="-" onClick={ (e) => setVal(Val + e.target.value) }>-</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-5 py-2 shadow" value="." onClick={ (e) => setVal(Val + e.target.value) }>.</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-5 py-2 shadow" value="0" onClick={ (e) => setVal(Val + e.target.value) }>0</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-5 py-2 shadow" value="=" onClick={ () => calculate() }>=</button>
                      </div>
                      <div className="col-md-3 mt-2">
                        <button className="btn btn-outline-primary px-4 py-2 shadow" value="*" onClick={ (e) => setVal(Val + e.target.value) }>X</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;

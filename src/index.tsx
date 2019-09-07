import { ExtendedModel, model, Model } from "mobx-keystone";
import React from "react";
import ReactDOM from "react-dom";

// FOCUS ON THIS SECTION ///////////////////////////////////////////////////////

class A extends Model({}) {}

// Uncomment the below block and it works fine.
//
// @model("B")
// class B extends A {}

@model("B")
class B extends ExtendedModel(A, {}) {}

// TypeError: Class constructor A cannot be invoked without 'new'
new B({});

////////////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <>
      mobx-keystone CRA issue: "TypeError: Class constructor A cannot be invoked
      without 'new'"
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

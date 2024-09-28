const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "head" }, "this the heading form react"),
    React.createElement("h2", { id: "head2" }, "this the heading 2 form react"),
  ]),React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "head" }, "this the heading form react"),
    React.createElement("h2", { id: "head2" }, "this the heading 2 form react"),
  ])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

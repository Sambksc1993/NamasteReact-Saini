const heading = React.createElement("h1", { id: "title" }, "Namaste React");
const heading2 = React.createElement("h2", { id: "title" }, "Namaste React 2");

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);

const root = React.createRoot(document.getElementById("container"));
root.render(container);

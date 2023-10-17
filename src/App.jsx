import Accordion from "./components/Accordion";

const App = () => {
  const items = [
    {
      id: "0",
      label: "Mariam",
      content: "Mariam is first child in her family bla bla bla bla",
    },
    {
      id: "1",
      label: "Gvantsa",
      content: "Gvantsa is middle child in her family",
    },
    { id: "2", label: "Nene", content: "Nene is last child in her family" },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;

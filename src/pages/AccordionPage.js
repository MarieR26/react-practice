import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "0",
      label: "Topic one",
      content:
        "I could talk a little bit but I'm lazy to come up with something to talk",
    },
    {
      id: "1",
      label: "Topic two",
      content:
        "I could talk a little bit but I'm lazy to come up with something to talk",
    },
    {
      id: "2",
      label: "Topic three",
      content:
        "I could talk a little bit but I'm lazy to come up with something to talk",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;

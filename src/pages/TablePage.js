import Table from "../components/Table";

const TablePage = () => {
  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`}></div>,
    },
    { label: "Score", render: (fruit) => fruit.score },
  ];

  const fruits = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Banana", color: "bg-yellow-500", score: 3 },
    { name: "Apple", color: "bg-red-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 6 },
  ];

  //function for keys in map:
  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={fruits} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;

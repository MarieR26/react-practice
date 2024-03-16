import React from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    return (
      <th className="p-3" key={keyFn(column)}>
        {column.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-3" key={column.name}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {/* <td className="p-3">{config[0].render(rowData)}</td>
        <td className="p-3">{config[1].render(rowData)}</td>
        <td className="p-3">{config[2].render(rowData)}</td> */}
        {/* instead of the code above I used second loop and named it "renderedCells" in order to not have hardcoded indexes as above */}
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;

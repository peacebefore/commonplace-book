import Spreadsheet from "react-spreadsheet";

const data = [
  [{ value: "Vanilla" }, { value: "Chocolate" }],
  [{ value: "Strawberry" }, { value: "Cookies" }],
];

const Budget = () => <Spreadsheet data={data} />;

export default Budget;
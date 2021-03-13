import Spreadsheet from "react-spreadsheet";

const data = [
  [{ value: "Vanilla" }, { value: "Chocolate" }],
  [{ value: "Strawberry" }, { value: "Cookies" }],
];

const Budget = () => <Spreadsheet data={data} />;

export default Budget;

// need to make spreadsheet blank, information added to the sheet will be saved
// also need to add a button to toggle the calculator on or off the screen
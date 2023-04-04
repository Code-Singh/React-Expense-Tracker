import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // Date Format
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { year: "numeric" });
  const year = props.date.toLocaleString("en-US", { day: "numeric" });

  return (
      <div className="expense-date">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
  );
}

export default ExpenseDate;

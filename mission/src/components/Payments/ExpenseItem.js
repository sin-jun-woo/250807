import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={() => props.deleteExpenseItem(props.index)}>
          삭제하기
        </button>
        <div className="expense-item__radio">{props.radio}</div>
        <div className="expense-item__checkbox">{props.checkbox}</div>
        <div className="expense-item__color">{props.color}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

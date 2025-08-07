import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2025, 8, 14),
      radio: "cash",
      checkbox: "식비",
      color: "#f1f1f1",
    },
  ]);

  const getPaymentFormData = (data) => {
    console.log("data", data);
    console.log("expenses", expenses);
    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),
        radio: data.radio,
        checkbox: data.checkbox,
        color: data.color,
      },
      ...expenses,
    ]);
  };

  const deleteExpenseItem = (index) => {
    console.log(index);
    //삭제하는 기능 2가지
    // 1. filter(item 배열의 id값을 사용하여 삭제)
    // const newFilteredArray = expenses.filter((item) => item.id !== id);
    // setExpenses(newFilteredArray);

    // 2. slice(item 배열의 index값을 사용하여 삭제)
    // [0, 1, 2, 3, ... , index, index + 1, ..., n - 1]
    // [0, 1, 2, 3, ... , index - 1, index + 1, ..., n-1]
    // [0, 1, 2, ... , index] [index + 1, ..., n-1]
    const beforeArray = expenses.slice(0, index);
    const afterArray = expenses.slice(index + 1);
    setExpenses([...beforeArray, ...afterArray]);
  };

  return (
    <>
      <PaymentForm getPaymentFormData={getPaymentFormData} />
      <Expenses items={expenses} deleteExpenseItem={deleteExpenseItem} />
    </>
  );
}

export default App;

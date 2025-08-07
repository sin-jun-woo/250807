import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = ({ getPaymentFormData }) => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: "",
    radio: "",
    checkbox: [],
    color: "#000000",
  });

  const inputTextHandler = (event) => {
    setObjectState((prev) => ({ ...prev, name: event.target.value }));
  };

  const inputNumberHandler = (event) => {
    setObjectState((prev) => ({ ...prev, price: event.target.value }));
  };

  const inputDateHandler = (event) => {
    setObjectState((prev) => ({ ...prev, today: event.target.value }));
  };

  const inputRadioHandler = (event) => {
    setObjectState((prev) => ({ ...prev, radio: event.target.value }));
  };

  const inputCheckboxHandler = (event) => {
    const { value, checked } = event.target;
    setObjectState((prev) => {
      const newCheckboxes = checked
        ? [...prev.checkbox, value]
        : prev.checkbox.filter((v) => v !== value);
      return { ...prev, checkbox: newCheckboxes };
    });
  };

  const inputColorHandler = (event) => {
    setObjectState((prev) => ({ ...prev, color: event.target.value }));
  };

  const buttonSubmitHandler = (event) => {
    event.preventDefault();
    getPaymentFormData(objectState);
    setObjectState({
      name: "",
      price: 0,
      today: "",
      radio: "",
      checkbox: [],
      color: "#000000",
    });
  };

  return (
    <div className="new-payment">
      <form onSubmit={buttonSubmitHandler}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            <label>이름</label>
            <input
              type="text"
              value={objectState.name}
              onChange={inputTextHandler}
            />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={objectState.price}
              onChange={inputNumberHandler}
            />
          </div>
          <div className="new-payment__control">
            <label>날짜</label>
            <input
              type="date"
              value={objectState.today}
              onChange={inputDateHandler}
            />
          </div>

          <div className="new-payment__control">
            <label>Radio</label>
            <br />
            <label>
              <input
                type="radio"
                name="payMethod"
                value="card"
                checked={objectState.radio === "card"}
                onChange={inputRadioHandler}
              />
              카드
            </label>
            <label>
              <input
                type="radio"
                name="payMethod"
                value="cash"
                checked={objectState.radio === "cash"}
                onChange={inputRadioHandler}
              />
              현금
            </label>
          </div>

          <div className="new-payment__control">
            <label>Checkbox</label>
            <br />
            <label>
              <input
                type="checkbox"
                value="식비"
                checked={objectState.checkbox.includes("식비")}
                onChange={inputCheckboxHandler}
              />
              식비
            </label>
            <label>
              <input
                type="checkbox"
                value="교통"
                checked={objectState.checkbox.includes("교통")}
                onChange={inputCheckboxHandler}
              />
              교통
            </label>
            <label>
              <input
                type="checkbox"
                value="문화"
                checked={objectState.checkbox.includes("문화")}
                onChange={inputCheckboxHandler}
              />
              문화
            </label>
          </div>

          <div className="new-payment__control">
            <label>Color</label>
            <input
              type="color"
              value={objectState.color}
              onChange={inputColorHandler}
            />
          </div>
        </div>

        <div className="new-payment__actions">
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;

import React, { useState } from "react";
import ExpenseForm from "./expense-tracker/components/expenseForm";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import Form from "./components/form";

export const Catagories = ["Groceries", "Utilities", "Entertainment"];

const App = () => {
  const [selectedCatagory, setSelectedCatagory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);
  const visibleExpenses = selectedCatagory
    ? expenses.filter((e) => e.category === selectedCatagory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <Form />
      </div>
      <div className="mb-3">
        <ExpenseForm onSubmit = {expense => setExpenses([...expenses, { ...expense , id : expenses.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCatagory={(category) => setSelectedCatagory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};
export default App;

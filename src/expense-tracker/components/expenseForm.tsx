import React, { FormEvent, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import Categories from "../Categories";
const schema = z.object({
  description: z
    .string()
    .min(0.01, { message: "Description must be at least three characters haha" })
    .max(100_000 , { message: "Name must be at most 50 characters haha" }),
  amount: z
    .number({ invalid_type_error: "Amount field is required!" })
    .min(10, { message: "Amount must be at least 10" }),
  category: z
    .enum(Categories , {errorMap : () => ({message : "Category is required bro haha"})}),
    
})
interface Props {
  onSubmit: (data: FormData) => void;
}

type FormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit } : Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors , isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return ( 
    <form onSubmit={handleSubmit(data => onSubmit(data))}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="catagory" className="form-label">
          Catagory
        </label>
        <select
          {...register("category")}
          name="category"
          id="catagory"
          className="form-select"
        >
          <option value=""></option>
          {Categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button  className="btn btn-primary">Submit</button>
    </form>
  );
};
export default ExpenseForm;

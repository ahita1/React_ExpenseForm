import React, { FormEvent, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { Catagories } from "../../App";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least three characters haha" }),
  amount: z
    .number({ invalid_type_error: "Amount field is required!" })
    .min(10, { message: "Amount must be at least 10" }),
  catagory: z
    .string()
    .min(3, { message: "One Category must be selected haha" }),
});


type FormData = z.infer<typeof schema>;

function expenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <select name="catagory" id="" className="form-select">
          <option value=""></option>
          {Catagories.map((catagory) => (
            <option key={catagory} value={catagory}>
              {" "}
              {catagory}{" "}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default expenseForm;

import React from 'react'
import Categories from '../Categories'


interface Props{
  onSelectCatagory : (category : string) => void
}
const ExpenseFilter = ({onSelectCatagory} : Props) => {
  return (
    <select name="" id="" className="form-select" onChange={(event) => onSelectCatagory(event.target.value)}>
      <option value="">All Catagories</option>
      {Categories.map(catagory => <option key={catagory} value={catagory}>{catagory}</option>)}
    </select>
  )}

export default ExpenseFilter

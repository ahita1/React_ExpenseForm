interface Props {
    children : string
    onClick : () => void
    color : string
}

function Button({children , onClick , color} : Props) {
  return (
    <button type="button" className={ 'btn btn-' +  color} onClick={ onClick }>{children}</button>
  )
}

export default Button

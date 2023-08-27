import { ReactNode } from "react"

interface Props {
    children : string
    onClose : () => void
}

function Alert({children , onClose} : Props) {
  return (
    <div className="alert alert-primary alert-dismissible">
     {children}
     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
  )
}

export default Alert

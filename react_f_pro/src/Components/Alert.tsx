import { ReactNode } from "react";

interface props {
	children: ReactNode;
	onClick: () => void;
}

function Alert({children}: props){
  return (
	 <div className="alert alert-primary">{children}</div>
  )
}

export default Alert
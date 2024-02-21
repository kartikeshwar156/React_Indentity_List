import { useState } from "react"

interface props{
	text_given: string
	maxChar: number
}

const ExpandableText = ({text_given, maxChar=50,}: props) => {

	const [expandable, setExpandable]=useState(true)

	if(text_given.length<=maxChar){
		return({text_given})
	}


	function handle_onclick(flag: boolean){
		console.log(!flag)
		setExpandable(flag);
		console.log(flag)
	}
	

  return (
	 <>
	 {expandable?text_given.substring(0, maxChar)+"...":text_given}
	 <button className="btn btn-primary" onClick={()=>handle_onclick(!expandable)}>{expandable?"More":"Less"}</button>
	 </>
  )
}

export default ExpandableText
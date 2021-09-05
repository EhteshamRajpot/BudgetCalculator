export default function Alert({type, text}){
	return(
		<>
			<div className={`alert alert-${type}`} style={{width: "50%", marginLeft: "25%", marginTop:"20px"}}>{text}</div>
		</>
	)
}
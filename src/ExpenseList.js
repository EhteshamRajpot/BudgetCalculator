import Item from "./ExpenseItem";
import DeleteIcon from '@material-ui/icons/Delete';
export default function ExpenseList({
	expenses,
	clearItem,
	deleteItem,
	editItem
}){
	return(
		<>
		  <ul className={"list"}>
			{
				expenses.map(expense=> {
					return <Item key={expenses.id}
								 expense={expense}
								 deleteItem={deleteItem}
								 editItem={editItem} />;
				})}
		  </ul>
		  	 {expenses.length > 0 && <button className={"btn text-white bg-danger"} style={{marginLeft:"25%", marginBottom: "20px"}} onClick={clearItem}>Clear All Expenses<DeleteIcon className={"btn-icon text-white"}/></button>}
		</>
	)
}
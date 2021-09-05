import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ExpenseItem({
	expense,
	deleteItem,
	editItem

}) {
	const { id, charge, amount } = expense;
	return (
		<li>
			<div className={"info row"}>
				<div className={"col-4"}>
					<span className={"expenses"}>{charge}</span>
				</div>
				<div className={"col-4"}>
					<span className={"amount bg-danger"}>${amount}</span>
				</div>
				<div className={"col-4"}>
					<button className={"btn edit-btn btn-outline-warning mt-1"} onClick={() => editItem(id)}>
						<EditIcon/>
					</button>
					<button className={"btn delete-btn btn-outline-danger mt-1"} onClick={() => {deleteItem(id)}}>
						<DeleteIcon/>
					</button>
				</div>
			</div>
		</li>
	)
}


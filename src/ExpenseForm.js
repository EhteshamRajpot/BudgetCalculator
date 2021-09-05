export default function ExpenseForm({
	amount,
	charge,
	handleAmount,
	handleCharge,
	handleSubmit,
	edit
}){
	return(
		<>
		<form onSubmit={handleSubmit}>
			<div className={"form-center row mb-5"}>
				<div className={"form-group col-3"}>
					<label htmlFor="charge">Charge</label>
					<input
						type={"text"}
						className={"form-control"}
						id={"charge"}
						name={"charge"}
						key={"charge"}
						placeholder={"e.g. rent"}
						value={charge}
						onChange={handleCharge}
					/>
				</div>
				<div className={"form-group col-3"}>
					<label htmlFor="charge">Amount</label>
					<input
						type={"number"}
						className={"form-control"}
						id={"amount"}
						name={"amount"}
						key={"amount"}
						placeholder={"e.g. 100"}
						value={amount}
						onChange={handleAmount}
					/>
				</div>
				<div className={"text-center col-3 mt-4"}>
					<button className={"submit btn btn-success"}>{edit ? "Update" : "Submit"}</button>
				</div>
			</div>
		</form>
		</>
	)
}
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import Alert from "./Alert";
import ExpenseForm from './ExpenseForm';
import ExpenseList from "./ExpenseList";
 const InitialExpenses = [
    {id: 1, charge:"rent", amount: 1600},
    {id: 2, charge:"car paymaent", amount: 400},
    {id: 3, charge:"credit card bill", amount: 1200},
  ];
  console.log(InitialExpenses);
function App() {
  // ***********State Values************
  // all expenses, add expenses
  const [expenses, setExpenses] = useState(InitialExpenses)
  // alert
  const [alert, setAlert] = useState({show:false})
  // single expenses
  const [charge, setCharge] = useState('')
  // single Amount
  const [amount, setAmount] = useState('')
  // edit
  const [edit, setEdit] = useState(false);
  // id
  const [id, setId] = useState(0);
  // ************ Functionality ************
  const handleCharge = (event) => {
      console.log(`charge : ${event.target.value}`);
      setCharge(event.target.value)
  };
  const handleAmount = (event) => {
      console.log(`amount : ${event.target.value}`);
      setAmount(event.target.value)
  };
  const handleAlert = ({type, text}) => {
      setAlert({show: true, type, text});
      setTimeout(() => {
        setAlert({ show: false });
      }, 3000);
  };
  // clear all item 
  const clearItem = () => {
    setExpenses([]);
    handleAlert({type: "danger", text: "All Items Deleted"});
  }
  // edit item
  const editItem = (id) => {
    let expense = expenses.find(item => item.id === id);
    let {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  }
  // delete Item 
  const deleteItem = (id) => {
    let temExpenses = expenses.filter(item => item.id !== id);
    setExpenses(temExpenses);
    handleAlert({type: "danger", text: "Item Deleted"});
  }
  const handleSubmit = (event) => {
      event.preventDefault();
      if(charge !== "" && amount > 0){
        if(edit){
            let temExpenses = expenses.map(item => {
              return item.id === id ? {...item, charge, amount} : item;
            });
            setExpenses(temExpenses);
            setEdit(false);
            handleAlert({ type: "success", text: "Item Updated"});
        }
        else{
             const singleExpense = {id, charge, amount};
             setExpenses([...expenses, singleExpense]);
             handleAlert({ type: "success", text: "Item Added"});
       
        }
       setCharge('');
        setAmount('');
      }
      else{
        // handle alert called
        handleAlert({
          type: 'danger',
          text: 'charge can not be empty value and amount value has to be bigger than zero.'
        });
      }
  };
  return(
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text}/>}
      <Alert/>
      <h1 align={"center"} className={"text-success"}>Budget Calculator</h1>
      <div className={"container mt-5 bg-dark text-white"}>
            <main className={"App"}>
              <ExpenseForm
              charge={charge}
              amount={amount}
              handleCharge={handleCharge}
              handleAmount={handleAmount}
              handleSubmit={handleSubmit}
              edit={edit}
              />
               <ExpenseList
                expenses={expenses}
                clearItem={clearItem}
                editItem={editItem}
                deleteItem={deleteItem}/>
            </main>
            <h1>
                    Total Spending : {" "}
               <span className={"total bg-success"}>
                    {expenses.reduce((acc, curr) => {
                      return(acc += parseInt(curr.amount));
                    },0)} $
               </span>
            </h1>
      </div>
    </div>
  )
}

export default App;

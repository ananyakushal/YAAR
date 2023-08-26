
function Rightstats(props) {
  return (
    <div className={props.className}>
      <h1 className="text-lg w-full md:mb-4 text-center md:text-3xl ">Stats</h1>
      <div className="Finance md:ml-3 flex flex-col ">
        <div className="m-1">Expense So Far : {props.totalExpense}</div>
        <div className="m-1">Income So Far : {props.totalIncome}</div>
        <div className="m-1">Total Balance : {props.totalBalance}</div>
        <div className="m-1">Contri to pay : {props.totalContriPay}</div>
        <div className="m-1">Contri to receive : {props.totalContriGet}</div>
        <div className="m-2 text-lg md:text-3xl">This Month</div>
        <div className="m-1">Income : {props.incomeMonth}</div>
        <div className="m-1">Expense : {props.expenseMonth}</div>
      </div>
      <hr className="m-3" />
      <div className="Task flex flex-col md:ml-3">
        <div className="m-1">Tasks So Far : {props.totalTasks}</div>
        <div className="m-1">Completed So Far : {props.totalCompleted}</div>
        <div className="m-2 text-lg md:text-3xl">This Month</div>
        <div className="m-1">Tasks Left : {props.tasksMonths}</div>
        <div className="m-1">Tasks Completed : {props.completedMonths}</div>
      </div>
    </div>
  );
}

Rightstats.defaultProps={
  totalExpense : "0",
  totalIncome :'0',
  totalBalance :'0',
  totalContriPay :'0',
  totalContriGet:'0',
  incomeMonth :'0',
  expenseMonth :'0',
  totalTasks :'0',
  totalCompleted :'0',
  tasksMonths :'0',
  completedMonths: '0',
}

export default Rightstats;

import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from "./Components/TransactionList";
import { NewTransaction } from "./Components/NewTransaction";

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses/>
          <TransactionList/>
          <NewTransaction />
        </div>
      
    </GlobalProvider>
  );
}

export default App;

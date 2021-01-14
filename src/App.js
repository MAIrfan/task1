import { Component } from 'react';
import './components/FontAwesome'
import './css/PricingTable.css';
import PricingTable from './components/PricingTable';


class App extends Component{
  render() {
    return (
      <main className="container">
        <PricingTable />
      </main>
    )
  }  
}

export default App;
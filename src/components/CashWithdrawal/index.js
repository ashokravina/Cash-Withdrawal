// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {TotalRupee: 2000, Balence: true}
  debitButton = value=> {
    const {TotalRupee} = this.state
    if (TotalRupee - value >= 0) {
      this.setState(prevState => ({TotalRupee: prevState.TotalRupee - value }))
      this.setState({Balence: true})
    } else {
      this.setState({Balance: false})
    }
  }
  render() {
    const {denominationsList} = this.props
    const {TotalRupee, Balence} = this.state
    const text = Balence ? null : (
      <span className="error">* Insufficient Funds</span>
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <button className="para">S</button>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balence-container">
            <p className="balence">Your Balance</p>
            <div className="balence-card">
              <h1 className="heading ruppes">{TotalRupee} </h1>
              <p className="paragraph">In Rupees</p>
            </div>
          </div>
          <h1 className="heading">Withdraw</h1>
          <p className="balence">CHOOSE SUM (IN RUPEES)</p>
          <ul className="debit-container">
            {denominationsList.map(eachRupee => (
              <DenominationItem
                DebitItem={eachRupee}
                debitButton={this.debitButton}
                key={eachRupee.id}
              />
            ))}
          </ul>
          {text}
        </div>
      </div>
    )
  }
}
export default CashWithdrawal

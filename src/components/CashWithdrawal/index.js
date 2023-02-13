// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  deductedMoney = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="name-container">
            <button type="button" className="button">
              {initial}
            </button>
            <span className="name">{name}</span>
          </div>

          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="balance-no-container">
              <p className="balance-no">{count}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>

          <p className="withdraw-text">Withdraw</p>
          <p className="sum-text">CHOOSE SUM (IN RUPEES)</p>

          <ul className="items-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                moneyDetails={eachItem}
                key={eachItem.id}
                deductedMoney={this.deductedMoney}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

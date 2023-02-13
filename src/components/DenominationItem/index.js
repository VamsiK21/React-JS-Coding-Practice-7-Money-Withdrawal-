// Write your code here

import './index.css'

const DenominationItem = props => {
  const {moneyDetails, deductedMoney} = props
  const {value} = moneyDetails

  const onDeduction = () => {
    deductedMoney(value)
  }

  return (
    <li className="list-style">
      <button type="button" onClick={onDeduction} className="money">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

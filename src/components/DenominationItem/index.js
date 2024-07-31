// Write your code here

import './index.css'

const DenominationItem = props => {
  const {DebitItem, debitButton} = props
  const {id, value} = DebitItem
  const OnDebitRuppes = () => {
    debitButton(value)
  }
  return (
    <li className="container">
      <button className="button" type="button" onClick={OnDebitRuppes}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem

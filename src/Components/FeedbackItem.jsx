import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import Card from "../Shared/Card"

function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
      <div  className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)}  className="close">
      <i color="purple" className="fa-sharp fa-solid fa-xmark"></i>
      </button>
      <button onClick={()=> editFeedback(item)} className="edit">
      <i color='purple' className="fa-regular fa-pen-to-square"></i>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem

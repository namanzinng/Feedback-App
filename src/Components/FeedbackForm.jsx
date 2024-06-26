import {useState, useContext, useEffect} from 'react'
import Card from "../Shared/Card"
import Button from '../Shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState()
    const [message, setMessage] = useState()
    const [btnDisabled, setBtnDisabled] = useState(true)
    const {addFeedback, feedbackEdit} = useContext(FeedbackContext)

useEffect(()=>{
if(feedbackEdit.edit === true){
    setBtnDisabled(false)
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
}
}, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === ''){
            setMessage(null)
            setBtnDisabled(true)
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('Text Must be at least 10 characters')
            setBtnDisabled(true) 
        }else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback ={
                text,
                rating,
            }
            addFeedback(newFeedback);
            setText('')
        }
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
            <input onChange={handleTextChange} type="text" placeholder="write a review" value={text} />
            <Button type='submit' isDisabled={btnDisabled} >send</Button>
        </div>
      </form>
    </Card>
  )

}

export default FeedbackForm

import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";


const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) =>{
    const [feedbackEdit, setFeedbackEdit] = useState({
     item: {},
     edit: false
    })
    const [feedback, setFeedback] = useState([

        {
            id: 1,
            text: 'This is Feedback item one',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 10
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 10
        }
    ])
    const editFeedback = (item) =>{
        setFeedback({
         item,
         edit: true
        } )
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    
      }

    return <FeedbackContext.Provider value={{
     feedback,
     deleteFeedback,
     addFeedback,
     editFeedback,
     feedbackEdit,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const ChatBox = () => {
  const dispatch = useDispatch()
  let [chat, setChat] = useState('')

  const handleChat = () => {
    dispatch({ type: 'chat', payload: chat })
  }

  return (
    <div>
      <form>
        <input onChange={event => setChat((chat = event.target.value))} />
        <button type={'button'} onClick={() => handleChat()}>
          send
        </button>
      </form>
    </div>
  )
}

import { Launcher } from 'react-chat-window'
import { useState } from 'react'

export const ChatMessages = () => {
  const [messageList, setMessage] = useState([])
  const onMessageWasSent = list => {
    setMessage([...messageList, list])
  }

  return (
    <div>
      <Launcher
        agentProfile={{
          teamName: 'How can we help you?'
        }}
        onMessageWasSent={message => onMessageWasSent(message)}
        messageList={messageList}
        showEmoji
      />
    </div>
  )
}

import { Launcher } from 'react-chat-window'
import { useState } from 'react'

export const ChatMessages = () => {
  const [messageList, setMessage] = useState([])
  const _onMessageWasSent = messageList1 => {
    setMessage([...messageList, messageList1])
  }

  return (
    <div>
      <Launcher
        agentProfile={{
          teamName: 'How can we help you?'
        }}
        onMessageWasSent={_onMessageWasSent.bind(messageList)}
        messageList={messageList}
        showEmoji
      />
    </div>
  )
}

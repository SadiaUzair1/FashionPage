import { ChatBox, ChatMessages } from 'containers'
import { ChatBoxNavBar } from 'components'

export const ChatRoom = () => {
  return (
    <div>
      <ChatBoxNavBar />
      <ChatMessages />
      <ChatBox />
    </div>
  )
}

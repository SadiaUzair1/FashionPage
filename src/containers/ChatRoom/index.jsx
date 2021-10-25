import { ChatBox, ChatMessages } from 'containers'
import { ChatBoxNavBar } from 'components'

export const ChatRoom = () => (
  <div>
    <ChatBoxNavBar />
    <ChatMessages />
    <ChatBox />
  </div>
)

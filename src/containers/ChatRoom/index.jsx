import { ChatBox, ChatMessages } from 'containers'
import { ChatBoxHeader } from 'components'

export const ChatRoom = () => (
  <div>
    <ChatBoxHeader />
    <ChatMessages />
    <ChatBox />
  </div>
)

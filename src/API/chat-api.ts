export type ChatMessageAPIType = {
  photo: string
  userName: string
  message: string
  userId: number
}

const closeHandler = () => {
  notifySubscribersAboutStatus(false)
  console.log('ws closed')
  setTimeout(createConnection, 3000)
}

const messageHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e.data)
  subscribers['messages-received'].forEach(s => {
    s(newMessages)
  })
}

let ws: WebSocket | null

const cleanUpWSListeners = () => {
  ws?.removeEventListener('close', closeHandler)
  ws?.removeEventListener('message', messageHandler)
  ws?.removeEventListener('open', openHandler)
  ws?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status: boolean) => {
  subscribers["status-changed"].forEach(s => s(status))
}

const openHandler = () => {
  notifySubscribersAboutStatus(true)
}

const errorHandler = () => {
  notifySubscribersAboutStatus(false)
}

const createConnection = () => {
  cleanUpWSListeners()
  ws?.close()
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  notifySubscribersAboutStatus(false)
  ws.addEventListener('close', closeHandler)
  ws.addEventListener('message', messageHandler)
  ws.addEventListener('open', openHandler)
  ws.addEventListener('error', errorHandler)
}

type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void
type StatusChangedSubscriberType = (status: boolean) => void

type EventsNames = 'messages-received' | 'status-changed'

const subscribers = {
  'messages-received': [] as MessagesReceivedSubscriberType[],
  'status-changed': [] as StatusChangedSubscriberType[],
}

export const chatAPI = {
  startConnection() {
    createConnection()
  },
  stopConnection() {
    cleanUpWSListeners()
    subscribers['messages-received'] = []
    subscribers['status-changed'] = []
    ws?.close()
  },
  subscribe(eventName: EventsNames, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
    // @ts-ignore
    subscribers[eventName].push(callback)
    return () => {
      // @ts-ignore
      subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    }
  },
  unsubscribe(eventName: EventsNames, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
    // @ts-ignore
    subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
  },
  sendMessage(message: string) {
    ws?.send(message)
  }
}
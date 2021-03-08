export type ChatMessageType = {
  photo: string
  userName: string
  message: string
  userId: number
}

const closeHandler = () => {
  console.log('ws closed')
  setTimeout(createConnection, 3000)
}

const messageHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e.data)
  subscribers.forEach(s => {
    s(newMessages)
  })
}

let ws: WebSocket | null

const createConnection = () => {
  ws?.removeEventListener('close', closeHandler)
  ws?.close()
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  ws.addEventListener('close', closeHandler)
  ws.addEventListener('message', messageHandler)
}

type SubscriberType = (messages: ChatMessageType[]) => void

let subscribers = [] as SubscriberType[]

export const chatAPI = {
  startConnection() {
    createConnection()
  },
  stopConnection() {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    subscribers = []
    ws?.close()
  },
  subscribe(callback: SubscriberType) {
    subscribers.push(callback)
    return () => {
      subscribers = subscribers.filter(s => s !== callback)
    }
  },
  unsubscribe(callback: SubscriberType) {
    subscribers = subscribers.filter(s => s !== callback)
  },
  sendMessage(message: string) {
    ws?.send(message)
  }
}
/// <reference types="vite/client" />
// /* eslint @typescript-eslint/no-explicit-any: 0 */

interface Clock {
  id: string,
  name: string,
  timeZone: string
}

interface Item {
  id: number,
  text: string
}

interface Message {
  id: number,
  userId: string,
  content: string
}
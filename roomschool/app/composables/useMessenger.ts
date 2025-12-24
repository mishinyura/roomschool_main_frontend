export const useMessenger = () => {
  const isOpenMessenger = useState('messenger-visible', () => false)

  const openMessenger = () => {
    isOpenMessenger.value = true
  }

  const closeMessenger = () => {
    isOpenMessenger.value = false
  }

  const toggleMessenger = () => {
    isOpenMessenger.value = !isOpenMessenger.value
  }

  return {
    isOpenMessenger,
    openMessenger,
    closeMessenger,
    toggleMessenger
  }
}
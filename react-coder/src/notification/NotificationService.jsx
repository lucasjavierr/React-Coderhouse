import { useState, createContext, useContext } from "react"

const Notification = ({ type, text }) => {
    const notifacationStyle = {
        position: 'absolute',
        top: 100,
        right: 20,
        backgroundColor: type === 'success' ? 'green' : 'red',
        color: 'white',
        padding: '10px 20px',
        borderRadius: 10
    }

    if(!text) return

    return (
        <div style={notifacationStyle}>
            {text}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [ notificationData, setNotificationData ] = useState({
        type: 'success',
        text: '',
    })

    const setNotification = (type, text) => {
        setNotificationData({ type, text })

        setTimeout(() => {
            setNotificationData({type, text: ''})
        }, 2000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification type={notificationData.type} text={notificationData.text}/>
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}
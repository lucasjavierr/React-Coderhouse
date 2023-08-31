import { useState, createContext, useContext } from "react";

const Notification = ({ type, text }) => {
  const notifacationStyle = {
    position: "absolute",
    top: 100,
    right: 20,
    backgroundColor: type === "success" ? "green" : "red",
    color: "white",
    padding: "10px 20px",
    borderRadius: 10,
  };

  if (!text) return null;

  return <div style={notifacationStyle}>{text}</div>;
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationData, setNotificationData] = useState({
    type: "success",
    text: "",
    time: 2000,
  });

  const setNotification = (type, text, time) => {
    setNotificationData({ type, text, time });

    setTimeout(() => {
      setNotificationData({ type, text: "" });
    }, time ?? 2000);
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      <Notification
        type={notificationData.type}
        text={notificationData.text}
        time={notificationData.time}
      />
      {children}
    </NotificationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useNotification() {
  return useContext(NotificationContext);
}

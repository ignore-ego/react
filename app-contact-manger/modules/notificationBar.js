// grab from dom
const notificationBar = document.querySelector('.notification-bar');

// addMessage
export const addMessage = (messageElement) => {
  clearMessages();
  notificationBar.append(messageElement);
};

// clear messages
export const clearMessages = () => {
  notificationBar.innerHTML = '';
};

// export defaul DOM object
export default notificationBar;

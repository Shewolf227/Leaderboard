const showNotification = (meassage) => {
  const postMessage = document.getElementById('post-message');
  postMessage.innerHTML = meassage;
  postMessage.classList.remove('hidden');
  setTimeout(() => {
    postMessage.classList.add('hidden');
    postMessage.innerHTML = '';
  }, 1000);
};

export default showNotification;

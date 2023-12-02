let check = function() {
  const message = document.querySelector('.message');
    if (document.getElementById('password').value == document.getElementById('confirm-password').value) {
      message.style.color = 'green'
      message.innerHTML = 'Passwords Match'
    } else {
      message.style.color = 'red'
      message.innerHTML = 'Passwords DO NOT Match'
    }
}
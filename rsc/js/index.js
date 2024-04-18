function toggle(element, arg) {
    if (arg === 'open') {
        element.style.opacity = element.style.zIndex = 1;
        element.style.top = 0
    }
    else if (arg === 'close') {
        element.style.opacity = 0;
        element.style.zIndex = -1;
        element.style.top = '-100rem';
    } else {
        return
    }
}

function sendMessage() {
    const nameFieldValue = nameField.value;
    const emailFieldValue = emailField.value;
    const textAreaValue = textArea.value;

    if ((!nameFieldValue) || (!emailFieldValue) || (!textAreaValue)) {
        showNotificationBox('Invalid Entry', 'Please fill all the fields. They are all required.');
    } else {
        fetch('send_message', {
            body: JSON.stringify({ nameFieldValue, emailFieldValue, textAreaValue }),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json()).then(({ sent }) => {
            if (sent) {
                showNotificationBox('Message Sent', 'Your message has been sent successfully.');
            } else {
                showNotificationBox('Unable to Send', 'Sorry, your message was not sent.');
            }
        }).catch(err => {})
    }
}

const menuIcon = document.querySelector('.open-menu');
const closeMenuIcon = document.querySelector('.close-menu');
const sendButton = document.querySelector('.send-button');
const projectInformationButtons = document.querySelectorAll('.info-button');
const projectInformation = document.querySelectorAll('.project-information');
const closeProjectInformationIcons = document.querySelectorAll('.close-information');
const navLinks = document.querySelectorAll('#full-screen-menu a');
const fullScreenMenu = document.getElementById('full-screen-menu');
const nameField = document.getElementById('name-field');
const emailField = document.getElementById('email-field');
const textArea = document.getElementById('text');

menuIcon.addEventListener('click', () => {
    toggle(fullScreenMenu, 'open');
})

closeMenuIcon.addEventListener('click', () => {
    toggle(fullScreenMenu, 'close');
});

sendButton.addEventListener('click', () => {
    sendMessage();
});

projectInformationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        toggle(projectInformation[index], 'open');
    })
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggle(fullScreenMenu, 'close');
    });
});

closeProjectInformationIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        toggle(projectInformation[index], 'close');
    })
})
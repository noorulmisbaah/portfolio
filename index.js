const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

app.listen(process.env.PORT || 8000);
app.use(express.static('rsc'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/send_message', (req, res) => {
    const { nameFieldValue, emailFieldValue, textAreaValue } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'noorulmisbaah.noor@gmail.com',
            pass: 'nndl isjz hlio oznh'
        }
    });

    const mailOptions = {
        from: emailFieldValue,
        to: 'aminunawwarah@gmail.com',
        subject: `Email From ${nameFieldValue}`,
        text: `Sender Email: ${emailFieldValue}
${textAreaValue}`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
            res.send(JSON.stringify({ sent: false }));
        } else {
            res.send(JSON.stringify({ sent: true }));
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './' })
})
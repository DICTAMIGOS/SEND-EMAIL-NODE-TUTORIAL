const nodemailer = require("nodemailer")

const controller = {}

controller.view = (req, res) => {
    res.render('index')
}

controller.send = async (req, res) => {
    const data = req.body
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: /*email*/,
            pass: /*password app*/, 
        },
    });

    let info = await transporter.sendMail({
        from: '', // sender address
        to: "", // list of receivers
        subject: "HOLA ALE", // Subject line
        text: `Te quiere contactar ${data.name} Su correo es: ${data.email} y dice: ${data.message}`, // plain text body
    });

    console.log("Mensaje enviado");
}

module.exports = controller
import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
  const { nombre, email, token } = datos;
  const transport = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
  const mailOptions = await transport.sendMail({
    from: '"Administrador"  <arieldominguez01@hotmail.com>',
    to: email,
    subject: 'Registro de Usuario - Sistema de Gestion de Proyectos',
    html: `<p>Hola ${nombre}, gracias por registrarte. Para activar tu cuenta, por favor ingresa al siguiente link:</p>
          <a href="${process.env.URL_BASE}/confirmar-cuenta/${token}">Activar Cuenta</a>
          
          
          <p>Si no has solicitado un registro, por favor ignora este correo.</p>`,
  });
};

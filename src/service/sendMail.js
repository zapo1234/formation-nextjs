import nodemailer from 'nodemailer';

// Créer le transporteur Nodemailer (SMTP)
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',  
  port: 587, 
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,  
    pass: process.env.EMAIL_PASS,  
  },
});

// Fonction d'envoi d'email
export const sendEmail = async (to, subject, text, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // L'email de l'expéditeur
    to, // L'email du destinataire
    subject, // Le sujet de l'email
    text, 
    html, 
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé:', info.response);
    return { success: true, message: 'Email envoyé avec succès' };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, message: 'Échec de l\'envoi de l\'email' };
  }
};

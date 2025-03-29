const transporter = require('../config/email.config');

// Contrôleur pour envoyer un email
exports.sendEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation des données
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Veuillez remplir tous les champs' 
      });
    }

    // Configuration de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || 'etsmaf5@gmail.com', // Utilise l'email du destinataire défini ou l'email par défaut
      replyTo: email,
      subject: `Formulaire de contact MAF - ${subject}`,
      html: `
        <h3>Nouveau message du formulaire de contact</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Votre message a été envoyé avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return res.status(500).json({
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi de votre message',
      error: error.message
    });
  }
};

import Email from "../models/Email.js";

// Add new email subscription
export const addEmail = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email already exists
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email já inscrito.",
      });
    }

    // Save new email
    const newEmail = new Email({ email });
    await newEmail.save();

    res.status(201).json({
      success: true,
      message: "Inscrição bem-sucedida!",
      data: newEmail,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Erro ao salvar o email.",
      error: err.message,
    });
  }
};

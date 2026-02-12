const Contact = require('../models/Contact');
const { sendContactEmail } = require('../utils/emailService');

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    const contact = await Contact.create({ name, email, message });
    await sendContactEmail({ name, email, message }).catch(() => {});
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};

exports.getContacts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    const [contacts, total] = await Promise.all([
      Contact.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Contact.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found.' });
    }

    res.status(200).json({ success: true, message: 'Contact deleted.' });
  } catch (error) {
    next(error);
  }
};

import Record from "../models/Record.js";

// CREATE (Admin only)
export const createRecord = async (req, res) => {
  try {
    const { amount, type, category } = req.body;

    if (!amount || !type || !category) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const record = await Record.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.status(201).json(record);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// GET ALL (All roles)
export const getRecords = async (req, res) => {
  try {
    const { type, category, page = 1, limit = 5 } = req.query;
    
    const filter = {};
    if (type) filter.type = type;
    if (category) filter.category = category;

    const records = await Record.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json(records);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// UPDATE (Admin only)
export const updateRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(record);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// DELETE (Admin only)
export const deleteRecord = async (req, res) => {
  try {
    await Record.findByIdAndDelete(req.params.id);
    res.json({ msg: "Record deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
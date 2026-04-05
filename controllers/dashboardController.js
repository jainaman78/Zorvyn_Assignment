import Record from "../models/Record.js";
export const getSummary = async (req, res) => {
  try {
    const records = await Record.find();
    const totalIncome = records
      .filter(r => r.type === "income")
      .reduce((sum, r) => sum + r.amount, 0);
    const totalExpense = records
      .filter(r => r.type === "expense")
      .reduce((sum, r) => sum + r.amount, 0);
    res.json({
      totalIncome,
      totalExpense,
      netBalance: totalIncome - totalExpense
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
export const categorySummary = async (req, res) => {
  try {
    const data = await Record.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
export const monthlyTrends = async (req, res) => {
  try {
    const data = await Record.aggregate([
      {
        $group: {
          _id: { $month: "$date" },
          total: { $sum: "$amount" }
        }
      },
      { $sort: { "_id": 1 } }
    ]);

    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
export const recentActivity = async (req, res) => {
  try {
    const records = await Record.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json(records);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const drillSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  repetition: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Drill = mongoose.model('Drill', drillSchema);

module.exports = Drill;
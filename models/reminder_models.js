const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reminder_body: {
      type: String,
      required: true,
    },
    reminder_frequency: {
      type: String,
      enum: ["Regular", "One-Time"],
      default: "Regular",
    },
    reminder_type: {
        type: String,
        enum: ["Both", "SMS", "Email"],
        default: "Both",
        required: false
    },
    trigger_date:{
        type: String,
        required: true,
    },
    trigger_time: {
      type: String,
      required: true,
    },   
  },
  { timestamps: true }
);



const Reminder = mongoose.model("Reminder", ReminderSchema);

module.exports = Reminder;
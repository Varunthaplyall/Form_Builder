const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form", required: true },
  responses: [
    {
      questionId: { type: String, required: true },
      answer: { type: Object, required: true },
    },
  ],
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Response", ResponseSchema);

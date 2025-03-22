const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: {
      type: new mongoose.Schema({
        description: { type: String },
        victimInfo: { type: String },
        suspectInfo: { type: String },
        weaponsUsed: { type: String },
        suicideDetails: { type: String },
        evidenceNotes: { type: String },
        witnessReports: { type: String },
        officerInCharge: { type: String },
        caseStatus: { type: String, default: "open" },
        publicRisk: { type: String, default: "none" },
        relatedCases: { type: String },
      }),
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    categories: {
      type: String,
      required: true,
      enum: [
        "Murder",
        "Theft",
        "Fraud",
        "Cybercrime",
        "Kidnapping",
        "Domestic Violence",
        "Drugs",
        "Awareness",
      ],
    },
    tags: [{ type: String }],
    featuredImage: { type: String }, // رابط الصورة الرئيسية
    media: [{ type: String }], // روابط صور أو فيديوهات أخرى
    status: {
      type: String,
      enum: ["Rejected", "Pending", "Published"],
      default: "Pending",
    },
    publishDate: { type: Date, default: Date.now },
    views: { type: Number, default: 0 },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    likes: { type: Number, default: 0 },
    location: {
      city: { type: String },
      country: { type: String },
    }, // location كـ embedded document
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);

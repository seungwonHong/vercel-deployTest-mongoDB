const { default: mongoose } = require("mongoose");

const ShortLinkSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    url: { type: String, default: "" },
    shortUrl: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);
// 중복 방지(이미 존재하면 그냥 그대로 쓰고 없으면 새로 만들기)
const ShortLink =
  mongoose.models["ShortLink"] || mongoose.model("ShortLink", ShortLinkSchema);

export default ShortLink;

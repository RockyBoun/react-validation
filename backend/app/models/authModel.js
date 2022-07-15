const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthSchema = new Schema(
  {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

mongoose.model("auth", AuthSchema);

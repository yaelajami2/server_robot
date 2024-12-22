const mongoose=require("mongoose");
const Schema_question=mongoose.Schema(
    {
      
        "id": String,
        "question":String,
        "answers":Array
      }
)

const quions_Model=mongoose.model("quions",Schema_question);
exports.quions_Model=quions_Model;
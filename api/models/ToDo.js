const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
    text: {
        type: String,
        required: true
        // implement a validator so the 
        // text won't be blank and draw an error
    },
    complete: {
        type: Boolean,
        required: true,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

const Todo = mongoose.model("Todo", ToDoSchema)

module.exports = Todo;

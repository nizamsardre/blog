const mongoose = require('mongoose');


var CommentSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  level: {
    type: [{
      type: String,
      enum: ['blogComm', 'replyReply', 'commReply']
    }],
    default: ['blogComm']
  },
  blogRef: {
    type: Schema.ObjectId,
    ref: 'Blog'
  },
  text: {
    type: String,
    default: '',
    trim: true,
    required: 'Texst cannot be blank'
  },
  up: {
    type: Number,
    min: 0,
    trim: true,
  },
  down: {
    type: Number,
    min: 0,
    trim: true,
  },
  replies: [{
    type: Schema.ObjectId,
    ref: 'Comment'
  }],
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});


module.exports = mongoose.model('Comment', CommentSchema);
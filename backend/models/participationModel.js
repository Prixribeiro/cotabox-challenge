const { Schema, model } = require('mongoose');

const participationSchema = new Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  participation: {
    type: Number,
  }
}, { collection: 'participation' }
);

const participationModel = model('participation', participationSchema);

module.exports = participationModel;
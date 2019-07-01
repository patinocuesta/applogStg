const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  syslog_msg: {
  type: String,
  required: false,
  },
  syslog_facility: {
  type: String,
  required: false,
  },
  syslog_severity: {
  type: String,
  required: false,
  },
});

const idsSchema = new mongoose.Schema({
  id_client: {
  type: String,
  required: false,
  },
  id_user: {
  type: String,
  required: false,
  },
  id_wholesaler: {
  type: String,
  required: false,
  },
});

const logSchema = new mongoose.Schema({
    domain: {
    type: String,
    required: false,
    },
    scope: {
    type: String,
    required: false,
    },
    received_host: {
    type: String,
    required: false,
    },
    event_ts: {
    type: String,
    required: false,
    },
    client_host: {
    type: String,
    required: false,
    },
    host: {
    type: String,
    required: false,
    },
    received_ts: {
    type: Date,
    required: false,
    },
    received_from: {
    type: String,
    required: false,
    },
    source_file: {
    type: String,
    required: false,
    },
    event_code: {
    type: String,
    required: false,
    },
    message: {
    type: String,
    required: false,
    },
    class: {
    type: String,
    required: false,
    },
    ids:
    [idsSchema],
    data:
    [dataSchema]
  },
    { timestamps: true }
  );

  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);

const Log = mongoose.model('Log',logSchema,'logscos');

const Models = {
  Log,
};
exports.Models = Models;

const dbUri = 'mongodb://10.30.60.17:27001/logsDB';

async function connect(io) {
  await mongoose.connect(dbUri);
  console.log('Connected to MongoDB');

  const logChangeStream = Models.Log.collection.watch({
    fullDocument: 'updateLookup',
  });
  logChangeStream.on('change', result => {
    console.log ('change!!', result.fullDocument);
    io.emit('log changeEvent',  {
      type: result.operationType,
      log: {
        result: result.fullDocument,
      },
    });
  });
}
exports.connect = connect;

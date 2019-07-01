const express = require('express');

const sendJsonResponse = function(res, status, content) {
res.status(status);
res.json(content);
};

module.exports = function createApi({ Models }) {
  const api = express.Router();

  // Get all Logs
  api.get('/logs', async (req, res) => {
    var columns = req.query.columns;
    if (!columns){
      columns= 'received_ts + received_from + domain + class + event_code + message';
    }
    await Models.Log
      .find({
        domain : req.query.domain,
        scope :  req.query.scope
      })
      .sort('-received_ts')
      .select(columns)
      .exec(function(err, log) {
        if (!log || log =="") {
          sendJsonResponse(res, 404, {
            "message": "no log found"
        });
        return;
        } else if (err) {
          sendJsonResponse(res, 404, err);
        return;
        }
          sendJsonResponse(res, 200, log);
      });
  });

  // Get single Log
  api.get('/logs/:logid', async (req, res) => {
    if (req.params && req.params.logid) {
          await Models.Log
            .findById(req.params.logid)
            .exec(function(err, log) {
              if (!log) {
                    sendJsonResponse(res, 404, {
                      "message": "logid not found"
                });
                return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
              return;
              }
              sendJsonResponse(res, 200, log);
                console.log('log:', log);
              });
        } else {
          sendJsonResponse(res, 404, {
            "message": "No logid in request"
          });

  }
    });

// Delete single Log
    api.delete('/logs/:logid', async (req, res) => {
      var logid = req.params.logid;
        if (logid) {
          await Models.Log
          .findByIdAndRemove(req.params.logid) //Call findByIdAndRemove method, passing lgid
          .exec(function(err, log) {//Execute methode
            if (!log) {
              sendJsonResponse(res, 404, {//Return failure
                "message": "logid not found"
              });
              return;
            } else if (err) {
                sendJsonResponse(res, 404, err);//Return failure
              return;
            }
            sendJsonResponse(res, 200, log);//Return success
              console.log('log deleted succesfully:', log);
            });
        } else {
            sendJsonResponse(res, 404, {//Return failure
              "message": "No logid in request"
          });
        }
        });
  /* POST 'Add Single Log' api */
    api.post('/logs', async (req, res) => {

      await Models.Log
        .create({
              event_ts: req.body.event_ts,
              client_host: req.body.client_host,
              host: req.body.host,
              received_host: req.body.received_host,
              received_ts: req.body.received_ts,
              received_from: req.body.received_from,
              domain: req.body.domain,
              scope: req.body.scope,
              source_file: req.body.source_file,
              class: req.body.classlog,
              event_code:req.body.event_code,
              message: req.body.message
          },
          function(err, log) {
            if (err) {
              sendJsonResponse(res, 400, err);
            } else {
              sendJsonResponse(res, 201, log);
              console.log('log created:', log)
            }
          })
        });
  /* POST 'Add Ids Log' api */
  api.post('/logs/ids/:logid', async (req, res) => {
    var logid = req.params.logid;
    if (logid){
    await Models.Log
      .findById(logid)
      .select('ids')
      .exec(function(err, log) {
        if (err) {
        sendJsonResponse(res, 400, err);
          } else {
          doAddIds(req, res, log);
          }
        });
      } else {
        sendJsonResponse(res, 404, {
          "message": "Not found, logid required"
          });
        }
      });
    var doAddIds = function(req, res, log) {
    if (!log) {
    sendJsonResponse(res, 404, {
    "message": "log id not found"
    });
    } else {
    log.ids.push({
      id_client: req.body.id_client,
      id_user: req.body.id_user,
      id_wholesaler: req.body.id_wholesaler
    });
    log.save(function(err, log) {
    var thisIds;
    if (err) {
    sendJsonResponse(res, 400, err);
    } else {
    thisIds = log.ids[log.ids.length - 1];
    sendJsonResponse(res, 201, thisIds);
    }
    });
    }
  };

  /* POST 'Add Data Log' api */
  api.post('/logs/data/:logid', async (req, res) => {
    var logid = req.params.logid;
    if (logid){
    await Models.Log
      .findById(logid)
      .select('data')
      .exec(function(err, log) {
        if (err) {
        sendJsonResponse(res, 400, err);
          } else {
          doAddData(req, res, log);
          }
        });
      } else {
        sendJsonResponse(res, 404, {
          "message": "Not found, logid required"
          });
        }
      });
      var doAddData = function(req, res, log) {
      if (!log) {
      sendJsonResponse(res, 404, {
      "message": "log id not found"
      });
      } else {
      log.data.push({
        syslog_msg : req.body.syslog_msg,
        syslog_facility:req.body.syslog_facility,
        syslog_severity: req.body.syslog_severity
      });
      log.save(function(err, log) {
      var thisDatas
      if (err) {
      sendJsonResponse(res, 400, err);
      } else {
      thisIds = log.data[log.data.length - 1];
      sendJsonResponse(res, 201, thisIds);
      }
      });
      }
      };

  return api;
};

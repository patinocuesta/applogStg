var  request = require('request');
var  apiOptions = {
  server : "http://localhost:8080"//Set default server URL for local development
    };

    if (process.env.NODE_ENV === 'production') {
      apiOptions.server = "";
    }


/* GET 'error' page */
module.exports.errorPage = function(req, res){
    res.render('error', { error: 'error' });
  };
/* GET 'home' page */
module.exports.homePage = function(req, res){
    res.render('index', { title: 'Home' });
  };

/* GET 'logs' page */
	var renderlogsList = function(req, res, responseBody){
    var columns = req.query.columns;
    var fields = req.query.fields;
    if (!fields){
      fields= [
        'received_from',
        'domain',
        'class',
        'event_code',
        'message'
      ]} else {
          fields = req.query.fields.split(" ");
          if (fields[0] == "received_ts") {
            fields.splice(0,1);
          }
      }
    if (!columns){
      columns= [
        'id',
        'received_ts',
        'received_from',
        'domain',
        'class',
        'event_code',
        'message'
      ]} else {
        columns = req.query.columns.split(" ");
      }

		res.render('logslist', {
		title: 'AppLog1' ,
		pageHeader: {
			title: 'AppLog1',
			strapline: 'going 4 real'
		},
    logs: responseBody,
    columns: columns,
    fields:fields,
    objects: {
			moment:require('moment')
		},
		});
	};
module.exports.logsList = function(req, res){
	var requestOptions, path;
  	path = '/api/logs/';
  	requestOptions = {
  		url : apiOptions.server + path,
  		method : "GET",
  		json : true,
  		qs: {
        domain : req.query.domain,
        scope :  req.query.scope,
        columns: req.query.columns,
        fields: req.query.fields
    		},
  	};
  	request(
  		requestOptions,
    		function(err, response, body) {
            if (response.statusCode ==404){
        			console.log('error');
        			res.redirect('error');
      		}
  			renderlogsList(req, res, body);
  	}
  	);
};

/* GET 'Single Log' page */
var renderSingleLog = function(req, res, logDetail){
  res.render('logssingle', {
  title: 'AppLog1' ,
  pageHeader: {
    title: 'AppLog1',
    strapline: 'going 4 real'
  },
	log: logDetail
	});
};

module.exports.showSingleLog = function(req, res){
var requestOptions, path;
path = "/api/logs/" + req.params.logid;
requestOptions = {
	url : apiOptions.server + path,
	method : "GET",
	json : {}
};
request(
	requestOptions,
	function(err, response, body){
		var data = body;
		renderSingleLog(req, res, data);
	}
);
};

/* GET 'Add log' page */
module.exports.addLog = function(req, res){
    res.render('logadd', { title: 'Add log' });
  };

/* GET 'Confirm New log' page */
var renderConfirmLog = function(req, res, logDetail){
	res.render('logaddconfirm', {
	title: 'AppLog1' ,
	pageHeader: {
		title: logDetail.scope + ':',
		strapline: logDetail.event_code + ' in ' + logDetail.received_host
	},
	log: logDetail
	});
};
module.exports.confirmAddLog = function(req, res){
	var requestOptions, path;
	path = "/api/logs/" + req.params.logid;
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {}
	};
	request(
		requestOptions,
		function(err, response, body){
			var data = body;
			renderConfirmLog(req, res, data);
		}
	);
};

/* POST 'Add New log' page */
module.exports.doAddLog = function(req, res){
//var requestOptionsLogs,requestOptionsIds,requestOptionsDatas, pathLogs, pathDatas, pathIds, dataItem, postdata, ids, data, idlog;
var pathLogs = '/api/logs';
var postdata = {
	event_ts: req.body.addEvent_ts,
	client_host: req.body.addClient_host,
	host: req.body.addHost,
	received_host: req.body.addReceived_host,
	received_ts: req.body.addReceived_ts,
	received_from: req.body.addReceived_from,
	domain: req.body.addDomain,
	scope: req.body.addScope,
	source_file: req.body.addSource_file,
	class: req.body.addClasslog,
	event_code:req.body.addEvent_code,
  message: req.body.addMessage};

var ids = {
  id_client: req.body.id_client,
  id_user: req.body.id_user,
  id_wholesaler: req.body.id_wholesaler};

var data = {
  syslog_msg : req.body.syslog_msg,
  syslog_facility:req.body.syslog_facility,
  syslog_severity: req.body.syslog_severity};

var requestOptionsLogs = {
	url : apiOptions.server + pathLogs,
	method : 'POST',
	json: postdata
	};

//console.log(postdata);
request(
	requestOptionsLogs,
	function(err, response, body) {
		if (response.statusCode === 201){
      console.log(body);

    var idlog = body._id;
    var pathIds = '/api/add/ids/' + idlog ;
    var requestOptionsIds = {
      url : apiOptions.server + pathIds,
      method : 'POST',
      json: ids
      };

    request(requestOptionsIds);

    var pathDatas = '/api/add/data/' + idlog;
    var requestOptionsDatas = {
      url : apiOptions.server + pathDatas,
      method : 'POST',
      json: data
      };

    request(requestOptionsDatas);
//a revisar
    res.redirect('http://localhost:8080/logs?domain=logger&scope=axialys');
		} else{
			showError (req, res, response.statusCode);
		}
	}
);

};




/* GET 'Delete logs' page */
	var renderlogDeleteList = function(req, res, responseBody){
    var columns = req.query.columns;
    var fields = req.query.fields;
    if (!fields){
      fields= [
        'received_from',
        'domain',
        'class',
        'event_code',
        'message'
      ]} else {
          fields = req.query.fields.split(" ");
          if (fields[0] == "received_ts") {
            fields.splice(0,1);
          }
      }
    if (!columns){
      columns= [
        '_id',
        'received_ts',
        'received_from',
        'domain',
        'class',
        'event_code',
        'message'
      ]} else {
        columns ='_id ' + req.query.columns.split(" ");
      }

		res.render('logdeletelist', {
		title: 'AppLog1' ,
		pageHeader: {
			title: 'AppLog1',
			strapline: 'going 4 real'
		},
    logs: responseBody,
    columns: columns,
    fields:fields,
    objects: {
			moment:require('moment')
		},
		});
	};
  module.exports.logDeleteList = function(req, res){
  	var requestOptions, path;
    	path = '/api/logs/';
    	requestOptions = {
    		url : apiOptions.server + path,
    		method : "GET",
    		json : true,
    		qs: {
          domain : req.query.domain,
          scope :  req.query.scope,
          columns: req.query.columns,
          fields: req.query.fields
      		},
    	};
    	request(
    		requestOptions,
      		function(err, response, body) {
              if (response.statusCode ==404){
          			console.log('error');
          			res.redirect('error');
        		}
    			renderlogDeleteList(req, res, body);
    	}
    	);
  };
/* DELETE 'delete log' */
var renderDeleteLog = function(req, res){
		//res.redirect('/');
};
module.exports.doDeleteLog = function(req, res){
	var requestOptions, path;
	path = "/api/logs/"+ req.params.logid;
	requestOptions = {
		url : apiOptions.server + path,
		method : "DELETE",
		json : {}
	};
	request(
		requestOptions,
		function(err, response,body){
			renderDeleteLog(req, res);
      console.log(body);
		}
	);
};

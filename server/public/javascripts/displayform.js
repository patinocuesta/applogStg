function cbCol(checkboxElem) {
  idStr = checkboxElem.id;
  idStr = idStr.slice(4);
  formStr = "cbf_"+ idStr;
    if (checkboxElem.checked) {
    document.getElementById(formStr).disabled = false ;
    } else {
    document.getElementById(formStr).disabled = true ;
  }
}

$(document).ready( function () {
$('#sendUrl').on('click', function () {

var urlParams = new URLSearchParams(window.location.search);
var urlPath = window.location.pathname;
var newUrl="http://localhost:3000" + urlPath + "?"+ "domain=" + getUrlParameter('domain') + "&"
                                        + "scope=" + getUrlParameter('scope');
var newFields = "fields=" + getElementsByIdStartsWith("cbfor", "input","cbf_" );
var newColumns = "columns=" + getElementsByIdStartsWith("cbcol", "input","cbc_" );

  if (!getElementsByIdStartsWith("cbcol", "input","cbc_" ) && !getElementsByIdStartsWith("cbfor", "input","cbf_" )){
    alert("No column selected. Results tab and filter form will display default fields and columns");
  } else if (getElementsByIdStartsWith("cbcol", "input","cbc_" ) && !getElementsByIdStartsWith("cbfor", "input","cbf_" )){
    newUrl = newUrl + "&" + newColumns + "+received_ts&" + newFields + "received_ts";
    }
    else if (getElementsByIdStartsWith("cbcol", "input","cbc_" ) && getElementsByIdStartsWith("cbfor", "input","cbf_" )){
      newUrl = newUrl + "&" + newColumns + "+received_ts&" + newFields;
    }
    window.location.assign(newUrl)
});
});

function getElementsByIdStartsWith(container, selectorTag, prefix) {
    var items = [];
    var myCbs = document.getElementById(container).getElementsByTagName(selectorTag);
    for (var i = 0; i < myCbs.length; i++) {
        //omitting undefined null check for brevity
        if (myCbs[i].id.lastIndexOf(prefix, 0) === 0) {
            items.push(myCbs[i]);
        }
    }
    var cbChecked = [];
    for (var i = 0; i < items.length; i++) {
      if (items[i].checked) {
        cbChecked.push(items[i].id.slice(4));
      }
    }
    return cbChecked.toString().replace(/,/g, "+");
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

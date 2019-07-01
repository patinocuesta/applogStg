$(document).ready(function(){
  $("#go2Modal1").on('click',function(){
    document.getElementById("go2Modal2").hidden = false;
    $("#formAjax1").load("/add #formbloc1");

  });

  $("#go2Modal2").on('click',function(){
    document.getElementById("addDomain").readOnly  = true;
    document.getElementById("addScope").readOnly  = true;
    document.getElementById("form-group1").className  = "form-group col-md-4";
    document.getElementById("form-group2").className  = "form-group col-md-4";
    document.getElementById("cmdAddDomain").hidden  = false;
    document.getElementById("cmdAddScope").hidden  = false;
    document.getElementById("go2Modal2").hidden = true;
    document.getElementById("go2Modal3").hidden = false;
    document.getElementById("cancelClo").hidden = true;
    document.getElementById("cancelDel").hidden = false;
      $("#formAjax2").load("/add #formbloc2");
  });

  $("#go2Modal3").on('click',function(){
    document.getElementById("addEvent_code").readOnly  = true;
    document.getElementById("addClasslog").readOnly  = true;
    document.getElementById("addDomain").readOnly  = true;
    document.getElementById("addScope").readOnly  = true;

    document.getElementById("form-group3").className  = "form-group col-md-4";
    document.getElementById("form-group4").className  = "form-group col-md-4";
    document.getElementById("cmdAddEvent_code").hidden  = false;
    document.getElementById("cmdAddClasslog").hidden  = false;
    document.getElementById("go2Modal3").hidden = true;
    document.getElementById("go2Modal4").hidden = false;
      $("#formAjax3").load("/add #formbloc3");
  });

  $("#go2Modal4").on('click',function(){
    document.getElementById("addInputIdType").readOnly  = true;
    document.getElementById("addInputIdItem").readOnly  = true;
    document.getElementById("addEvent_code").readOnly  = true;
    document.getElementById("addClasslog").readOnly  = true;
    document.getElementById("addDomain").readOnly  = true;
    document.getElementById("addScope").readOnly  = true;

    document.getElementById("go2Modal4").hidden = true;
    document.getElementById("go2Modal5").hidden = false;
    document.getElementById("idfields").hidden = true;
      $("#formAjax4").load("/add #formbloc4");
  });

  $("#go2Modal5").on('click',function(){
    document.getElementById("addSource_file").readOnly  = true;
    document.getElementById("addInputDataType").readOnly  = true;
    document.getElementById("addInputDataItem").readOnly  = true;
    document.getElementById("addInputIdType").readOnly  = true;
    document.getElementById("addInputIdType").readOnly  = true;
    document.getElementById("addInputIdItem").readOnly  = true;
    document.getElementById("addEvent_code").readOnly  = true;
    document.getElementById("addClasslog").readOnly  = true;
    document.getElementById("addDomain").readOnly  = true;
    document.getElementById("addScope").readOnly  = true;

    document.getElementById("form-group5").className  = "form-group col-md-10";
    document.getElementById("cmdAddSource_file").hidden  = false;
    document.getElementById("go2Modal5").hidden = true;
    document.getElementById("go2Modal6").hidden = false;
    document.getElementById("itemfields").hidden = true;
      $("#formAjax5").load("/add #formbloc5");
  });
  $("#go2Modal6").on('click',function(){
    document.getElementById("addClient_host").readOnly  = true;
    document.getElementById("addHost").readOnly  = true;
    document.getElementById("addReceived_host").readOnly  = true;
    document.getElementById("addReceived_ts").readOnly  = true;
    document.getElementById("addReceived_from").readOnly  = true;
    document.getElementById("addEvent_ts").readOnly  = true;
    document.getElementById("addSource_file").readOnly  = true;
    document.getElementById("addInputDataType").readOnly  = true;
    document.getElementById("addInputDataItem").readOnly  = true;
    document.getElementById("addInputIdType").readOnly  = true;
    document.getElementById("addInputIdType").readOnly  = true;
    document.getElementById("addInputIdItem").readOnly  = true;
    document.getElementById("addEvent_code").readOnly  = true;
    document.getElementById("addClasslog").readOnly  = true;
    document.getElementById("addDomain").readOnly  = true;
    document.getElementById("addScope").readOnly  = true;

    document.getElementById("go2Modal6").hidden = true;
    document.getElementById("go2Modal7").hidden = false;
    document.getElementById("form-group8").className  = "form-group col-md-4";
    document.getElementById("form-group9").className  = "form-group col-md-4";
    document.getElementById("form-group10").className  = "form-group col-md-4";
    document.getElementById("form-group11").className  = "form-group col-md-4";
    document.getElementById("form-group12").className  = "form-group col-md-4";
    document.getElementById("form-group13").className  = "form-group col-md-4";
    document.getElementById("cmdAddClient_host").hidden  = false;
    document.getElementById("cmdAddHost").hidden  = false;
    document.getElementById("cmdAddReceived_host").hidden  = false;
    document.getElementById("cmdAddReceived_ts").hidden  = false;
    document.getElementById("cmdAddReceived_from").hidden  = false;
    document.getElementById("cmdAddEvent_ts").hidden  = false;
    document.getElementById("go2Modal6").hidden = true;
    document.getElementById("go2Modal7").hidden = false;
      $("#formAjax6").load("/add #formbloc6");
  });

  $("#go2Modal7").on('click',function(){
    document.getElementById("addMessage").readOnly  = true;
    document.getElementById("addClient_host").readOnly  = true;
    document.getElementById("addHost").readOnly  = true;
    document.getElementById("addReceived_host").readOnly  = true;
    document.getElementById("addReceived_ts").readOnly  = true;
    document.getElementById("addReceived_from").readOnly  = true;
    document.getElementById("addEvent_ts").readOnly  = true;
    document.getElementById("addSource_file").readOnly  = true;
    document.getElementById("addInputDataType").readOnly  = true;
    document.getElementById("addInputDataItem").readOnly  = true;
    document.getElementById("addInputIdType").readOnly  = true;
    document.getElementById("addInputIdType").readOnly  = true;
    document.getElementById("addInputIdItem").readOnly  = true;
    document.getElementById("addEvent_code").readOnly  = true;
    document.getElementById("addClasslog").readOnly  = true;
    document.getElementById("addDomain").readOnly  = true;
    document.getElementById("addScope").readOnly  = true;


    document.getElementById("go2Modal7").hidden = true;
    document.getElementById("go2Modal8").hidden = false;
    document.getElementById("cmdAddDomain").disabled  = true;
    document.getElementById("cmdAddScope").disabled  = true;
    document.getElementById("cmdAddEvent_code").disabled  = true;
    document.getElementById("cmdAddClasslog").disabled  = true;
    document.getElementById("cmdAddSource_file").disabled  = true;
    document.getElementById("cmdAddClient_host").disabled  = true;
    document.getElementById("cmdAddHost").disabled  = true;
    document.getElementById("cmdAddReceived_host").disabled  = true;
    document.getElementById("cmdAddReceived_ts").disabled  = true;
    document.getElementById("cmdAddReceived_from").disabled  = true;
    document.getElementById("cmdAddEvent_ts").disabled  = true;
      $("#formAjax7").load("/add #formbloc7");
      var inputs = document.querySelectorAll('input');
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == ""){
          inputs[i].name = "xx"+inputs[i].name;
        }
      }
  });

  $("#cancelDel").on('click',function(){
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
      var inputname = inputs[i].name ;
      if (inputname.charAt(0)== "x"){
        inputs[i].name = inputname.substr(2);
      }
    }
    resetForm();
  });
  $("#modalAdd").on("hidden.bs.modal", function () {
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
      var inputname = inputs[i].name ;
      if (inputname.charAt(0)== "x"){
        inputs[i].name = inputname.substr(2);
      }
    }
    resetForm();
  });

});
function unlockinput(id){
id = id.substr(3);
var firstlet = id.charAt(0).toLowerCase();
id = id.substr(1);
id = firstlet+id;
document.getElementById(id).readOnly = false;
}
function addId(){
  var newHtml = '<div class="itemIdGp"><div class="form-group col-md-5">';
  newHtml = newHtml + '<label for="idType"><span class="badge badge-warning">Id label:</span></label>';
  newHtml = newHtml + '<input readonly type="text" class="form-control" value="'+ document.getElementById("addInputIdType").value +'"></div>';
  newHtml = newHtml + '<div class="form-group col-md-5">';
  newHtml = newHtml + '<label for="idItem"><span class="badge badge-warning">Id item:</span></label>';
  newHtml = newHtml + '<input readonly id="'+ document.getElementById("addInputIdType").value +'" type="text" class="form-control" value="'+ document.getElementById("addInputIdItem").value +'"></div>';
  newHtml = newHtml + '<button type="button" onclick="$(this).parent().remove();" class="btn btn-danger">Del</button></div>';
  var addidform = newHtml + document.getElementById("addIdgroup").innerHTML;
  document.getElementById("addIdgroup").innerHTML = addidform;
 };

function addForm3(){
  var newHtml = '<div class="itemGp"><div class="form-group col-md-5">';
  newHtml = newHtml + '<label for="data"><span class="badge badge-warning">Data label:</span></label>';
  newHtml = newHtml + '<input readonly type="text" class="form-control" value="'+ document.getElementById("addInputDataType").value +'"></div>';
  newHtml = newHtml + '<div class="form-group col-md-5">';
  newHtml = newHtml + '<label for="data"><span class="badge badge-warning">Data item:</span></label>';
  newHtml = newHtml + '<input readonly id="'+ document.getElementById("addInputDataType").value +'" type="text" class="form-control" value="'+ document.getElementById("addInputDataItem").value +'"></div>';
  newHtml = newHtml + '<button type="button" onclick="$(this).parent().remove();" class="btn btn-danger">Del</button></div>';
  var adddataform = newHtml + document.getElementById("addItemgroup").innerHTML;
  document.getElementById("addItemgroup").innerHTML = adddataform;
 };
 function resetForm(){
   var inputs = document.getElementsByTagName("input");
   for (var i =0; i<inputs.length; i++){
     inputs[i].value = "";
   }
   document.getElementById("go2Modal2").hidden = true;
   document.getElementById("go2Modal3").hidden = true;
   document.getElementById("go2Modal4").hidden = true;
   document.getElementById("go2Modal5").hidden = true;
   document.getElementById("go2Modal6").hidden = true;

   document.getElementById("formAjax2").innerHTML = "";
   document.getElementById("formAjax3").innerHTML = "";
   document.getElementById("formAjax4").innerHTML = "";
   document.getElementById("formAjax5").innerHTML = "";
   document.getElementById("formAjax6").innerHTML = "";
 };

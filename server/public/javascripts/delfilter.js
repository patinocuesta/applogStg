//checkBoxAll
function checkBoxAll(button_id){
  var checkboxes = document.getElementsByName("delCheck");
  var logsSelect  = document.getElementById("logsSelect");
  var tr = document.getElementsByClassName("logLine");
  var counter = 0;
    if (document.getElementById(button_id).innerHTML == "Select all"){

          for(i=0, counter=0; i<tr.length;i++) {
            if (tr[i].style.display == "" && tr[i].hidden==false){
                checkboxes[i].checked = true;
            counter++;
              }
            }
        document.getElementById(button_id).innerHTML = "Unselect all";
      } else {
        document.getElementById(button_id).innerHTML = "Select all";
          for(i=0, n=checkboxes.length;i<n;i++) {
            checkboxes[i].checked = false;
            }
          }
    logsSelect.innerHTML = counter;
}

function checkSingle(){
    var logsSelect  = document.getElementById("logsSelect");
    var checkboxes = document.getElementsByName("delCheck");
    var counter = 0;

    for(i=0, counter=0; i<checkboxes.length;i++) {
      if (checkboxes[i].checked == true){
        counter++;
        }
    }
    logsSelect.innerHTML = counter;

}


function countAndCheck(){
  var tr = document.getElementsByClassName("logLine");
  var logsSelect  = document.getElementById("logsSelect");
  var checkboxes = document.getElementsByName("delCheck");
  var counter = 0;
    for(i=0, counter=0; i<tr.length;i++) {
      if (tr[i].style.display == 'none' && checkboxes[i].checked == true){
          checkboxes[i].checked = false;
          } else if(tr[i].style.display == '' && checkboxes[i].checked == true) {
            counter++;
            }
        }
  logsSelect.innerHTML = counter;
}



window.addEventListener("load", function(event) {
    resetDel();

  $(document).ready(function(){
  $("#del_domain").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#mainTab tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    countAndCheck();
  });

  });

  $(document).ready(function(){
   $("#del_received_host").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tbody tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
     countAndCheck();
   });
  });

  $(document).ready(function(){
   $("#del_client_host").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tbody tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
     countAndCheck();
   });
  });

  $(document).ready(function(){
   $("#del_host").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tbody tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
      countAndCheck();
   });

  });

  $(document).ready(function(){
   $("#del_received_from").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tbody tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
      countAndCheck();
   });

  });

  $(document).ready(function(){
   $("#del_source_file").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tbody tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
      countAndCheck();
   });
  });

  $(document).ready(function(){
   $("#del_event_code").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tbody tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
        countAndCheck();
   });

  });

  $(document).ready(function(){
   $("#del_message").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tbody tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
      countAndCheck();
   });
  });

  $(document).ready(function(){
   $("#del_class").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tbody tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
      countAndCheck();
   });
  });

  $(document).ready(function(){
      $('#del_received_ts').on('apply.daterangepicker', function(ev, picker) {
         var startDate = new Date(picker.startDate);
         var endDate = new Date(picker.endDate);
         var items = document.getElementsByName("received_ts");
          for(var i=0; i<items.length;i++) {
            var dateStr= moment(items[i].innerHTML, 'D/M YYYY, h:mm:ss a').valueOf();
            items[i].parentNode.setAttribute("hidden", "");
            if(startDate.getTime() < dateStr && dateStr < endDate){
              items[i].parentNode.removeAttribute("hidden");
            }
          }
          countAndCheck();
      });
      });


});

function resetDel(){
  document.getElementById("confDel").hidden=true;
  document.getElementById("cancelDel").hidden=false;
  document.getElementById("closeDel").hidden=true;
  var inputs = document.getElementsByTagName("input");
  for(var i=0;i<inputs.length; i++ ){
    if (inputs[i].name != 'del_received_ts'){
      inputs[i].value = "";
    }
  }

  var checkboxes = document.getElementsByName("delCheck");
  var logsSelect  = document.getElementById("logsSelect");
  var tr = document.getElementsByClassName("logLine");
  for(i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = false;
    }
    logsSelect.innerHTML= 0;
}
function resetFilter(){
    resetDel();
    location.reload();
}
function confirmeDel(){
  var logsSelect  = document.getElementById("logsSelect");
  var delcardtext  = document.getElementById("delcard-text");
  var logstoDel  = document.getElementById("logstoDel");
  $("#cardInfo").removeClass("card bg-success text-white").addClass("card bg-danger text-white");
  document.getElementById("cancelDel").hidden=false;
if (logsSelect.innerHTML == 0){
  logstoDel.hidden = true;
  document.getElementById("confDel").hidden=true;
  document.getElementById("closeDel").hidden=true;
  delcardtext.innerHTML = "No log selected";

}else{
  delcardtext.innerHTML = "Your are about to delete:";
  document.getElementById("confDel").hidden=false;
  document.getElementById("closeDel").hidden=true;
  logstoDel.innerHTML = logsSelect.innerHTML + " logs";
  logstoDel.hidden = false;
}

}

function subDel(){
  var logsSelect  = document.getElementById("logsSelect");
  var delcardtext  = document.getElementById("delcard-text");
  var logstoDel  = document.getElementById("logstoDel");
  var tr = document.getElementsByClassName("logLine");
  var checkboxes = document.getElementsByName("delCheck");
  var cardInfo = document.getElementById("cardInfo");
  document.getElementById("confDel").hidden=true;
  document.getElementById("cancelDel").hidden=true;
  for(i=0;i<tr.length;i++) {
    if(tr[i].style.display == '' && checkboxes[i].checked == true) {
      var child = tr[i].querySelector('.id');
      $.ajax({
        url: '/api/logs/'+child.innerHTML,
       type: 'delete',
            }).done(function( data ) {
              console.log("id:"+child.innerHTML+"====>DELETED");
      });
    }
  }
  $("#cardInfo").removeClass("card bg-danger text-white").addClass("card bg-success text-white");
  delcardtext.innerHTML="Logs deleted succesfully";
  logstoDel.innerHTML = logsSelect.innerHTML + " logs";
  document.getElementById("closeDel").hidden=false;
}

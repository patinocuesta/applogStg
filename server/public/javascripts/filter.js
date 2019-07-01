window.addEventListener("load", function(event) {

  $(document).ready(function(){
  $("#input_domain").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#mainTab tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  });

  $(document).ready(function(){
   $("#input_received_host").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
   });
  });

  $(document).ready(function(){
   $("#input_client_host").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
   });
  });

  $(document).ready(function(){
   $("#input_host").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
   });
  });

  $(document).ready(function(){
   $("#input_received_from").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
   });
  });

  $(document).ready(function(){
   $("#input_source_file").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
   });
  });

  $(document).ready(function(){
   $("#input_event_code").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
   });
  });

  $(document).ready(function(){
   $("#input_message").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
   });
  });

  $(document).ready(function(){
   $("#input_class").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#mainTab tr").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
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
      });
    });

      $(document).ready(function(){
        $('#input_received_ts').on('apply.daterangepicker', function(ev, picker) {
          var startDate = new Date(picker.startDate);
          var items = document.getElementsByName("received_ts");

          for(var i=0; i<items.length;i++) {
            var dateStr= moment(items[i].innerHTML, 'D/M YYYY, h:mm:ss a').valueOf();
            items[i].parentNode.setAttribute("hidden", "");
            if(startDate.getTime() < dateStr){
              items[i].parentNode.removeAttribute("hidden");
            }
          }

        });
      });

});

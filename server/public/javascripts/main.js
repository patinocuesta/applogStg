window.addEventListener("load", function(event) {
  var urlParams = new URLSearchParams(window.location.search);

  var brand = document.getElementById('brand');
  brand.setAttribute('href', "/logs?" + urlParams);
  var navdelete = document.getElementById('navdelete');
  navdelete.setAttribute('href', "/delete?" + urlParams);
    columns= [
      'received_ts',
      'received_from',
      'domain',
      'class',
      'event_code',
      'message'
    ];
if (urlParams.get('columns')){
columns = urlParams.get('columns').split(" ");
}
console.log (columns);

for (var i = 0; i < columns.length; i++) {
  console.log (columns[i]);
  var els = document.getElementsByClassName(columns[i]);
  Array.prototype.forEach.call(els, function(el) {
  el.removeAttribute("hidden")
});
}

fields= [
  'received_from',
  'domain',
  'class',
  'event_code',
  'message'
];

if (urlParams.get('fields')){
fields = urlParams.get('fields').split(" ");
  if (fields[0] == "received_ts") {
    fields.splice(0,1);
  }
}

console.log (fields);
for (var i = 0; i < fields.length; i++) {
  var optionValues =[];
 $("#ul_" + fields[i] + " li").each(function(){
     if($.inArray(this.innerHTML, optionValues) >-1){
        $(this).remove()
     }else{
        optionValues.push(this.innerHTML);
     }
  });

}

$(document).ready(function(){
  var startDate =  moment().startOf('hour').add(-23, 'hour');
  var endDate = moment().startOf('hour').add(1,'hour');

    $("#del_received_ts").daterangepicker({
      timePicker: true,
      startDate: startDate,
      endDate: endDate,
      locale: {
        format: 'D/M YYYY, h:mm:ss a'
      }
    });

  var items = document.getElementsByName("received_ts");
    for(var i=0; i<items.length;i++) {
        var dateStr= new Date(items[i].innerHTML);
        items[i].innerHTML = moment(items[i].innerHTML).format('M/D YYYY, h:mm:ss a');
          if(dateStr > startDate && dateStr < endDate){
            items[i].parentNode.removeAttribute("hidden");
            }
        }


      });

$(document).ready(function(){
    var startDate =  moment().startOf('hour').add(-24, 'hour');
    var items = document.getElementsByName("received_ts");

    $("#input_received_ts").daterangepicker({
      singleDatePicker: true,
      timePicker: true,
      startDate: startDate,
      showDropdowns: true,
      locale: {
      format: 'D/M YYYY, h:mm:ss a'
      }
    });

    for(var i=0; i<items.length;i++) {
        var dateStr= new Date(items[i].innerHTML);
        items[i].innerHTML = moment(items[i].innerHTML).format('D/M YYYY, h:mm:ss a');
          if(dateStr > startDate){
            items[i].parentNode.removeAttribute("hidden");
            }
          }
      });
});

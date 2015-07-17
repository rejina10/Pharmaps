/**
 * 
 */

var list;
var tapTimer;
$('#page_medicineScheduleDisp').live('pageinit', function(event) {
    var rand = Math.floor(Math.random() * 101);
    parseSchema();
    $("#scheduleDisp").addClass('ui-corner-top');
    $("#addNew").click(function() {
        schedule.editFileName = "prescription_" + rand + ".json";
        schedule.listFlag = false;
        $.mobile.changePage("medicineSchedule.html", {
            transition : "none"
        });
    });
    
 
  $('#scheduleDisp li').live('click', function() {
        var listName;
        schedule.deleteFlag = false;
        listName = $(this).text();
        schedule.editFileName = listName.split(/[\s]/, 1);
        schedule.listFlag = true;
        $.mobile.changePage("medicineSchedule.html", {
            transition : "none"
        });
    });
});
  /*var tapTime=0;
  $('#scheduleDisp li').live('vmouseup', function() {
    tapTime = new Date().getTime();
    alert("mouseUp:"+tapTime);
    var current  = new Date().getTime();
    alert("current:"+current);
    var duration = (current - tapTime);
    alert("duration:"+duration);
    if (duration > 3000) {
        alert("taphold event occur");
        $(this).remove();
    }        
    else {
        alert("tap event occur");
        var listName;
        schedule.deleteFlag = false;
        listName = $(this).text();
        schedule.editFileName = listName.split(/[\s]/, 1);
        schedule.listFlag = true;
        $.mobile.changePage("medicineSchedule.html", {
            transition : "slide"
        });
      }
   });
  */
//setup a timer and a flag variable
 
     /*var isTapHold = false;
  $('#scheduleDisp li').live('vmousedown vmouseup', function (event) {
      
      if (event.type == 'vmousedown') {
          list = $(this);
          listName = $(this).text();
          //set the timer to run the `taphold` function in three seconds
          //
          tapTimer = setTimeout(function () {
              isTapHold = true;
              schedule.deleteFlag = true;
              schedule.editFileName = listName.split(/[\s]/, 1);
              navigator.notification.confirm('Do you want to delete it?', // message
              onConfirmation, // callback to invoke with index of button pressed
              'Delete', // title
              'Yes,No' // buttonLabels
              );
          },2000);
      } else {
          //event.type == 'vmouseup'
          //clear the timeout if it hasn't yet occured
          clearResetTimer();    

          //if the flag is set to false then this is a `tap` event
          if (!isTapHold) {
              //this is a tap, not a tap-hold
              var listName;
              schedule.deleteFlag = false;
              listName = $(this).text();
              schedule.editFileName = listName.split(/[\s]/, 1);
              schedule.listFlag = true;
              $.mobile.changePage("medicineSchedule.html", {
                  transition : "none"
              });
          }

          //reset flag
          isTapHold = false;
      }
  });

function clearResetTimer() {
    if ( tapTimer ){
        clearTimeout( tapTimer );
        tapTimer = 0;
    }
}*/

   /*$("#scheduleDisp li").live("taphold", function(event) {
        //event.stopImmediatePropagation();
        schedule.deleteFlag = true;
        list = $(this);
        listName = $(this).text();
        schedule.editFileName = listName.split(/[\s]/, 1);
        navigator.notification.confirm('Do you want to delete it?', // message
        onConfirmation, // callback to invoke with index of button pressed
        'Delete', // title
        'Yes,No' // buttonLabels
        );
   });*/
    
  
    //$("ul").listview ();
    
   /* $("#scheduleDisp li .ui-icon").live("click", function (event)
    {
      $(this).closest ("li").remove ();
    });*/
   /*$('.deleteMe').live('click',function(){
      var listName = $(this).parent().text();
      $(this).parent().remove();
      schedule.deleteFlag = true;
      schedule.editFileName = listName.split(/[\s]/, 1);
      navigator.notification.confirm('Do you want to delete it?', // message
      onConfirmation, // callback to invoke with index of button pressed
      'Delete', // title
      'No,Yes' // buttonLabels
      );
   });*/


var schedule = new schemaObject();
function schemaObject() {
    this.medicineName = "";
    this.medicineQuantity = "";
    this.medicineTime = "";
    this.checkbox1 = "";
    this.checkbox2 = "";
    this.checkbox3 = "";
    this.checkbox4 = "";
    this.checkbox5 = "";
    this.checkbox6 = "";
    this.checkbox7 = "";
    this.editFileName = "";
    this.deleteFlag = "";
    this.listFlag = "";
}
function onConfirmation(buttonIndex) {
    if (buttonIndex == 1) {
        list.remove();
        $("#scheduleDisp").listview("refresh");
        parse();
    }
}
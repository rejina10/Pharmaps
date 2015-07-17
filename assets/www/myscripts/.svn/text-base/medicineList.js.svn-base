/**
 * 
 */
var listname;
var medicineInfo = new medicineObject();
$('#page_medicineList').live('pageshow', function(event) {
    readFile();
    $("#allMedicineList").addClass('ui-corner-top');
    $('#allMedicineList li').live('click', function() {
        listname = $(this).text();
        medicineDesc();
    });
});
function readFile() {
    $('#allMedicineList').empty();
    $.each(medicineInfo.medicines,function(i, record) {
       for ( var j = 0; j < record.length; j++) {
           name = (record[j].name);
           $('#allMedicineList')
             .append('<li data-icon="false"'
             + 'class="li-background-color" ><a><img src="images/bullet_pills.png"'
             + 'class="ui-li-icon" /><h3>'
             + name + '</h3></a></li>');
          }
   });
  $("#allMedicineList").listview('refresh');
}
function medicineDesc() {

    $.each(medicineInfo.medicines, function(i, record) {
        for ( var j = 0; j < record.length; j++) {
            name = (record[j].name);

            if (listname == name) {
                medicineInfo.medicineName = name;
                description = (record[j].description);
                medicineInfo.medicineDesc = description;
                /*
                 * window.location.href = "medicineInfo.html?name=" + name + "&" +
                 * "description=" + description;
                 */
                $.mobile.changePage("medicineInfo.html", {
                    transition : "none"
                });
            }
        }
    });
}
function medicineObject() {
    this.medicineName = "";
    this.medicineDesc = "";
}
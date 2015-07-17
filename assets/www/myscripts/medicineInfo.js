/**
 * 
 */
$('#page_medicineDesc').live('pageinit', function(event) {
    var medicineName = medicineInfo.medicineName;
    var medicineDesc = medicineInfo.medicineDesc;
    /*var medicineName = urlParams["name"];
    var medicineDesc = urlParams["description"];*/
    $("#medicineName").text(medicineName);
    $("#medicineDesc").text(medicineDesc);
});

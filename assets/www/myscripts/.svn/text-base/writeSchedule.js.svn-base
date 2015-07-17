/**
 * 
 */


function writeSchedule() {    
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotDirectoryRead,
            fail);
}
function gotDirectoryRead(fs) {
    fs.root.getFile("PharmapsFile/" + schedule.editFileName, {
        create : true,
        exclusive : false
    }, gotFileEntry, fail);
}
function gotFileEntry(writer) {
    writer.createWriter(gotFileWriter, fail);
}
function gotFileWriter(writer) {

    var Schema = new Object();
    var medicineDateTime = new Object();
    medicineDateTime.name = schedule.medicineName;
    medicineDateTime.quantity = schedule.medicineQuantity;
    var dateArray = new Object();
    dateArray.checkbox1 = schedule.checkbox1;
    dateArray.checkbox2 = schedule.checkbox2;
    dateArray.checkbox3 = schedule.checkbox3;
    dateArray.checkbox4 = schedule.checkbox4;
    dateArray.checkbox5 = schedule.checkbox5;
    dateArray.checkbox6 = schedule.checkbox6;
    dateArray.checkbox7 = schedule.checkbox7;
    medicineDateTime.date = dateArray;
    medicineDateTime.time = schedule.medicineTime;
    Schema.medicineDateTime = medicineDateTime;
    var jsonText = JSON.stringify(Schema);
    writer.write(jsonText);
    $.mobile.changePage("Schema.html");
}
function fail(error) {
    console.log(error.code);
}

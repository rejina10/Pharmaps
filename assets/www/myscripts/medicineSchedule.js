/**
 * 
 */

$('#page_medicineSchedule').live('pageinit', function(event) {
    //alert(schedule.editFileName);
    $("#listname").val(schedule.editFileName);
    createSelectMenu();// creating dynamically select menu
    var t = "android";
    var m = "clickpick";
    $('#timer').scroller({
        preset : 'time',
        theme : t,
        mode : m,
        ampm : false,
        timeFormat : 'HH:ii'
    });
    if (schedule.listFlag === true) {
        parse();
    }
    $("#saveSchedule").click(function() {
        var empty = validate();
        if (empty == true) {
            alert("Fields required!!");
        } else {
            getSchema();
            writeSchedule();
        }
    });
});
function getSchema() {
    var checkArray = new Array();
    checkArray = [];
    var checkList;
    $('input[type=checkbox]').each(function() {
        name = $(this).val();
        checkList = (this.checked ? name : " ");
        checkArray.push(checkList);
    });
    schedule.checkbox1 = checkArray[0];
    schedule.checkbox2 = checkArray[1];
    schedule.checkbox3 = checkArray[2];
    schedule.checkbox4 = checkArray[3];
    schedule.checkbox5 = checkArray[4];
    schedule.checkbox6 = checkArray[5];
    schedule.checkbox7 = checkArray[6];
    schedule.medicineTime = $("#timer").val();
    schedule.medicineName = $("#selectMedicine").val();
    schedule.medicineQuantity = $("#quantity").val();
}
function parse() {
    //alert(schedule.editFileName);
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFileSys, fail);
}
function gotFileSys(fs) {
    fileSystem = fs;
    fileSystem.root.getFile("PharmapsFile/" + schedule.editFileName, {
        create : true,
        exclusive : false
    }, gotFileRead, fail);
}
function gotFileRead(fileEntry) {
    if (schedule.deleteFlag === true) {
        fileEntry.remove(removesucess, fail);
    } else {
        fileEntry.file(readAsText, fail);
    }
}
var listDetail = new Array();
function readAsText(file) {
    var reader = new FileReader();
    reader.onloadend = function(evt) {
        var entry = evt.target.result;
        listDetail.push(entry);
        getEditList();
    };
    reader.readAsText(file);
}
function fail(error) {
    console.log(error.code);
}
function getEditList() {
    var dateArray = new Array();
    dateArray = [];
    var jsonObject = JSON.parse(String(listDetail[0]));
    schedule.medicineName = jsonObject['medicineDateTime'].name;
    schedule.medicineQuantity = jsonObject['medicineDateTime'].quantity;
    schedule.checkbox1 = jsonObject['medicineDateTime'].date.checkbox1;
    schedule.checkbox2 = jsonObject['medicineDateTime'].date.checkbox2;
    schedule.checkbox3 = jsonObject['medicineDateTime'].date.checkbox3;
    schedule.checkbox4 = jsonObject['medicineDateTime'].date.checkbox4;
    schedule.checkbox5 = jsonObject['medicineDateTime'].date.checkbox5;
    schedule.checkbox6 = jsonObject['medicineDateTime'].date.checkbox6;
    schedule.checkbox7 = jsonObject['medicineDateTime'].date.checkbox7;
    schedule.medicineTime = jsonObject['medicineDateTime'].time;
    $("#timer").val(schedule.medicineTime);
    $("#quantity").val(schedule.medicineQuantity);

    var text1 = schedule.medicineName + "";
    var myselect = $("select#selectMedicine");
    $('select#selectMedicine').val(text1);
    myselect.selectmenu("refresh");

    dateArray.push(schedule.checkbox1);
    dateArray.push(schedule.checkbox2);
    dateArray.push(schedule.checkbox3);
    dateArray.push(schedule.checkbox4);
    dateArray.push(schedule.checkbox5);
    dateArray.push(schedule.checkbox6);
    dateArray.push(schedule.checkbox7);
    for (i = 0; i < dateArray.length; i++) {
        $('input[name="' + dateArray[i] + '"]').attr('checked', true)
                .checkboxradio("refresh");
    }
}
function createSelectMenu() {
    $.each(medicineInfo.medicines, function(i, record) {
        for ( var j = 0; j < record.length; j++) {
            name = (record[j].name);
            $('#selectMedicine').append(
                    '<option value=' + name + '>' + name + '</option>');
        }
    });
    $('#selectMedicine').selectmenu('refresh');
}
function removesucess(file) {
    console.log("removal succeded");
}

function validate() {
    var fields = $("input[type='checkbox']").serializeArray();
    if (fields.length == 0) {

        return true;
    } else if ($('#timer').val() == '') {

        return true;
    } else if ($('#quantity').val() == '') {

        return true;
    }

    return false;

}

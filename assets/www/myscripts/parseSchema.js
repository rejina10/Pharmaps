
function parseSchema() {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFile, fail);
}
function gotFile(fs) {
    fileSystem = fs;
    fileSystem.root.getDirectory("PharmapsFile", {
        create : true,
        exclusive : false
    }, gotDirectory, fail);
}
function gotDirectory(dirEntry) {
    // Get a directory reader
    var directoryReader = dirEntry.createReader();

    // Get a list of all the entries in the directory
    directoryReader.readEntries(success, fail);
}
var schemaDetail = new Array();
var fileNameArray = new Array();
var listDetail = new Array();
function success(entries) {
    var finished = 0;
    var i;
    listDetail = [];
    schemaDetail = [];
    for (i = 0; i < entries.length; i++) {
        fileName = entries[i].name;
        console.log(entries[i].name);
        fileNameArray.push(fileName);
        var reader = new FileReader();
        reader.onload = function(evt) {
            var entry = evt.target.result;
            schemaDetail.push(entry)
            if (++finished === entries.length) {
                getMedicineSchedule();
            }
        };
        reader.readAsText(entries[i]);
    }
}
function getMedicineSchedule() {

    $('#scheduleDisp').empty();
    for ( var j = 0; j < schemaDetail.length; j++) {

        var jsonObject = JSON.parse(String(schemaDetail[j]));
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
        schedule.checkbox1 = schedule.checkbox1 + "";
        schedule.checkbox2 = schedule.checkbox2 + "";
        schedule.checkbox3 = schedule.checkbox3 + "";
        schedule.checkbox4 = schedule.checkbox4 + "";
        schedule.checkbox5 = schedule.checkbox5 + "";
        schedule.checkbox6 = schedule.checkbox6 + "";
        schedule.checkbox7 = schedule.checkbox7 + "";
        $('#scheduleDisp').append(

                '<li data-icon="false" class="li-background-color"><a>'
                        + '<label style="display:none">' + fileNameArray[j]
                        + '</label>' + '<h3>&nbsp;' + schedule.medicineName
                        + "&nbsp;-&nbsp;" + schedule.medicineQuantity
                        + '</h3><p id="p' + j + '">Ma Di Wo Do Vr Za Zo'
                        + "-&nbsp;&nbsp;" + schedule.medicineTime
                        + '</p></a></li>');
        /*-------get the selected days on list with bold text----------------*/
        $.fn.wrapInTag = function(opts) {

            var o = $.extend({
                words : [],
                tag : '<strong>'
            }, opts);

            return this.each(function() {
                var html = $(this).html();
                for ( var i = 0, len = o.words.length; i < len; i++) {
                    var re = new RegExp(o.words[i], "gi");
                    html = html.replace(re, o.tag + '$&'
                            + o.tag.replace('<', '</'));
                }
                $(this).html(html);
            });

        };

        $('#p' + j).wrapInTag(
                {
                    words : [ schedule.checkbox1, schedule.checkbox2,
                            schedule.checkbox3, schedule.checkbox4,
                            schedule.checkbox5, schedule.checkbox6,
                            schedule.checkbox7 ],
                    tag : '<span>'
                });

    }
    $("#scheduleDisp").listview('refresh');
}
function fail(error) {
    console.log(error.code);
}

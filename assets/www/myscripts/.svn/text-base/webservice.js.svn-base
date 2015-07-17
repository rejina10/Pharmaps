$('#page_login').live('pageinit', function(event) {
       $("#login").click(function() {
       username = $("#username").val();
        password = $("#password").val();
        //login(username,password);   
       /* //window.location = "homeList.html";*/
        $.mobile.changePage( "homeList.html", { transition: "none"} );
    });
});

function login(user, pass) {
    var header = "<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\">"
            + "<s:Body>"
            + "<login xmlns=\"http://tempuri.org/\" >"
            + "<username>"
            + user
            + "</username>"
            + "<password>"
            + pass
            + "</password>" + "</login>" + "</s:Body>" + "</s:Envelope>";

    $.ajax({
        type        : 'POST',
        url         : 'http://192.168.100.26/LocationDirectory/HelloWorldService.svc',
        dataType    : 'xml',
        contentType : 'text/xml',
        data        : header,
        beforeSend  : function(xhr) {
            xhr.setRequestHeader('SOAPAction',
                    'http://tempuri.org/IHelloWorldService/login');
        },
        success : function(response, type, xhr) {
            if ($(response).text() == "") {
                alert("Login failed");

            } else {
                var id = $(response).text();
                alert("Login successful for " + id);
                localStorage.domain_name = "ith";// $('#domain').val();
                localStorage.username = "admin";// $('#username').val();
                localStorage.userid = id;
                // createDirectories();
                // window.location = "#page-bulletin";
                  // window.location = "homeList.html";
                 $.mobile.changePage("homeList.html");
            }

        },
        error : function(xhr) {
            alert(xhr.statusText + " error");
        }
    });
}

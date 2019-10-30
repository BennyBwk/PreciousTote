$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        if ($( "#langDiv" ).html() == "EN") {
            if ($("input[name='nameTB']").val().length === 0 || !$.trim($("input[name='nameTB']").val()) ) {
                event.preventDefault();
                alert("Please fill in your name!");
            } else if ($("input[name='emailTB']").val().length === 0 || !$.trim($("input[name='emailTB']").val()) ) {
                event.preventDefault();
                alert("Please fill in your email address!");
            } else if ($("input[name='enquiryType']").val().length === 0 ) {
                event.preventDefault();
                alert("Please select an enquiry type!");
            } else if (!$.trim($("#enquriyTB").val())) {
                event.preventDefault();
                alert("Your message is empty!");
            }
        }
    });
});
$(document).ready(function() {
    $('#contactForm').submit(function(event) {
		if ($("input[name='nameTB']").val().length === 0 || !$.trim($("input[name='nameTB']").val()) ) {
			event.preventDefault();
			alert("Please fill in your name!");
		} else if ($("input[name='emailTB']").val().length === 0 || !$.trim($("input[name='emailTB']").val()) ) {
			event.preventDefault();
			alert("Please fill in your email address!");
		} else if ($("input[name='enquiryType']").val().length === 0 ) {
			event.preventDefault();
			alert("Please select an enquiry type!");
		} else if (!$.trim($("#messageTB").val())) {
			event.preventDefault();
			alert("Your message is empty!");
		} else {
			event.preventDefault();
			var $botToken = '992849472:AAHZZ3jEbcGh_TxUX3vvnJMwvmbTuMmQXik';
			$('#tgMsgFrame').prop('src', 'https://api.telegram.org/bot' + $botToken + '/sendMessage?chat_id=-373170216&text=Enquiry from ' + $("input[name='nameTB']").val() + '%0D%0AEmail: ' + $("input[name='emailTB']").val() + '%0D%0AEnquiry Type: ' + $("input[name='enquiryType']").val() + '%0D%0A%0D%0AMessage:%0D%0A' + $("#messageTB").val().replace(/\n\r?/g, '%0D%0A') );
			alert("Your enquiry has been submitted!");
		}
    });
});
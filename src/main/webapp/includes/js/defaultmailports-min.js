AJS.$(function(c){var a={pop3:110,pop3s:995,imap:143,imaps:993};var b=c("#port");c("select[name='protocol']").change(function(){var d=c(this).val();if(!a.hasOwnProperty(d)){alert("Protocol: "+d+" is not a supported protocol.")}else{b.val(a[d])}})});
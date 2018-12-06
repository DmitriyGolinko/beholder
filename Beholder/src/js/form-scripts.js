$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});
function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
 
    $.ajax({
        type: "POST",
        url: "../php/process.php",
        data: "name=" + name + "&phone=" + phone + "&email=" + email,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "text-hide" );
    $("#form-submit").removeClass("btn-primary");
}
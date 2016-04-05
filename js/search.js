// This is for the search box, if you want to add new search terms, remember to use appropriate JS!
var idForm = 'form';
var form = $('#' + idForm);
form.submit(function(e) {
    e.preventDefault();
    var redirectTo = form.find('input').val();
    switch(redirectTo) {
       case "INPUT_VALUE_EXAMPLE":
          window.location = 'YOUR URL HERE';
          break;
       case "Op-Manager"
          window.location = 'https://GitHub.com/mcrafterss/op-manager'
          break;
     }
});

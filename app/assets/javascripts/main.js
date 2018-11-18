$(document).ready(function() {
  $("#new_customer").submit(function(event){
    event.preventDefault()
    let data = event
    console.log($('#name').val())
    fetch('/users',{
        method: "POST"
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
  })
});

$("#ticketCreateFailAlert").hide();

$("#createTicketButton").click(function() {
    let ticketCompany = $("#ticketCompany").val();
    let ticketDescription = $("#ticketCompany").val();
    let ticketStatus = $("#ticketStatus").val();
    
    let lastTicketRow = $("#ticketTable tr").last();
    let ticketNewID = lastTicketRow.find("td")[0].html;
    console.log(ticketNewID);

    $("#ticketTable").append("<tr><td>#</td><td>"+ticketCompany+"</td><td>"+ticketDescription+"</td><td>"+ticketStatus+"</td></tr>");
});
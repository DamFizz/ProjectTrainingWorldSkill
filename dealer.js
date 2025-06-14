var brandlist = new Array("Porsche","Volkswagen","Audi","BMW");

var gameStats = {
	clientServed: 0,
	carssold: 0,
	totalAmount: 0
};

var carPrices = {
	"Porsche": 650000.00,
	"Volkswagen": 180000.00,
	"Audi": 300000.00,
	"BMW": 250000.00
}


function newClient(){
	var preference = Math.floor((Math.random()*4));
	var time = Math.floor((Math.random()*10000)+1);
	var client = Math.floor((Math.random()*10)+1);
	$("#clients_queue").append('<div class="client client_'+client+'"><span class="preference">Client for '+brandlist[preference]+'</span></div>');
	setTimeout(function(){newClient();},time);
	$(".client").draggable();
	
}
$("document").ready(function(e) {
	newClient();

	    $( ".place" ).droppable({
      drop: function( event, ui ) {
        alert('dropped')
      }
    });
	$( "#cashier" ).droppable({
      drop: function( event, ui ) {
       gameStats.totalAmount = gameStats.totalAmount + carPrices.BMW;
		gameStats.clientServed++;
		gameStats.carssold++;
       updateStats();
      }
    });
	$( "#exit" ).droppable({
      drop: function( event, ui ) {
		gameStats.clientServed++;
		updateStats();
      }
    });
});

function updateStats(){
		$("#clients_served" ).text(gameStats.clientServed + "clients")
		$("#cars_sold" ).text(gameStats.carssold + "cars")
		$("#amount" ).text(gameStats.totalAmount + " €"	)
}

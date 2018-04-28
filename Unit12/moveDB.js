m1 = {
	name: "In Bruges", 
	rating: 5, 
	watched: true
}; 

m2 = {
	name: "Frozen", 
	rating: 4.5, 
	watched: false
}; 

m3 = {
	name: "Mad Max", 
	rating: 5, 
	watched: true
}; 

m4 = {
	name: "Lampin'", 
	rating: 3.5, 
	watched: true
}; 

movies = [m1, m2, m3, m4];

movies.forEach( function(mov){
	if (mov.watched){
		seen = "have watched";
	}
	else{
		seen = "have not seen";
	}

	//console.log("You " + seen + " \"" + mov.name "\" - " + mov.rating + " stars");
	console.log("You " + seen + "  " + mov.name + " - " + mov.rating +  " stars");

}); 
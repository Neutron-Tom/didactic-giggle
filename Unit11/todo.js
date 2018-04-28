var todos = ["Buy Turtle", "Kill things"];

var input = prompt("What would you like to do?");



while (input!=="quit"){

	if (input==="list"){
		listTodos(); 

	} else if(input==="new"){
		newTodo(); 

	} else if(input==="delete"){
		deleteTodo();
	}

	var input = prompt("What would you like to do?");

}

console.log("OK, you quit the app");


function listTodos(){
	
	console.log("*********");
		// loop through all todos
		todos.forEach(function(todo,idx){
			console.log(idx + ': ' + todo);
		})

		console.log("*********");
		
}		


function newTodo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo(){
		//ask for the index
		var index = prompt("Enter index of todo to delete"); 
	//delete that todo
	//use splice()
	todos.splice(index,1);

	console.log("Deleted Todo");

}
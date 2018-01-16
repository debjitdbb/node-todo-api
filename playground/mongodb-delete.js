
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if(err)
	{
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// //deleteMany
	// db.collection('Users').deleteMany({name: 'Debjit'}).then((result) => {
	// 	console.log(result);
	// });


	//deleteOne
	db.collection('Users').deleteOne({_id: new ObjectID("5a5b808c858a1526409f9741")}).then((result) => {
	console.log(result);
	});


	// findOneAndDelete
	// db.collection('Users').findOneAndDelete({completed: false}).then((result) =>{
	// 	console.log(result);
	// });

	//db.close();
});

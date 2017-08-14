# Quickstart MEAN application
## Getting Setup
You need the following application install on your machine:
 - Node
 - NPM
 - Angular CLI
 - MongoDB
Follow These instructions install app:
1. Clone this repository in your folder.
```
git clone git@github.com:Louis-GabrielPoirot/quickstart-mean-app.git
```
2. Install all dependencies with NPM
```
npm install
```
3. Change the mongoDB request for connect the serveur.js file to your local database.
```
MongoClient.connect("mongodb://localhost/nameOfYourDatabase")
	.then(function (database) {
		db = database;

		db.collection("nameOfYourCollection").find().toArray()
			.then(function (results) {
				results.forEach(function (obj) {
					console.log("ID : " + obj._id.toString());
				});
			})
			.catch(function (error) {
				console.log(error);
			})
	})
	.catch(function (error) {
		console.log(error);
	})
```
4. Build and run the application.
```
npm run play
```

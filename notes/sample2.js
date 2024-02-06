// backend 

// Html 
// css js - front end 

// react js -> framework for the frontend -> 

// major proejcts -> Api -> 
// bewakoof 
// any 
// API -> 

// Backend -> 


// Static Websites vs dynamic website ->

// dynamic website -> user interaction ->


// fb -> Ravi -> logins -> 
// feed -> customized for ravi 

// ravi friends post will be seen -> 

// profile -> ravi data -> 


// static backend + logic (backend) -> dyanmic website -> 

// logic -> programming languagev -> 


// frontend -> js and its subsidaries -> 	ts, react, ts+ react, -> js


// backend -> broswer interaction is not there hencec we are not limited to js

// frameworks or environmetns -> 

// python -> django flask
// php -> laravel
// ruby on rails ->
// rust  ->
// js -> environemnt to run js-> (node) |||||||||||| deno |||bun 

// js -> was only meant for frotnend prgoramming -> 

// js can only be understood by browser ??? why? 

// js engine -> 
// chrome -> v8 engine
// browers -> 
// spider monkey -> mozilla
// chakra -> edge 

// node is the first class citizen -> what is the meaning of this? 
// whenever a version release of v8 engine comes -> it should be totally comptaible with the node -> 

// node (enviroment) => v8 engine + many more things (tbd)

// Backend -> 

// JS 
// c++
// assembly language 
// machine code


// http is considered to be a stateless protocol -> 

// what do you understand by this statement -> 

// load || traffic -> consecutive users at a particular point of time -> 

// 1) http and its stateless nature -> homework -> 


// data storing -> 
// NoSql and Sql(tabular form) -> 

// SQL -> MySql, Postgres, SQLLite, oracle

// NoSql -> MongoDB, Redis, DynamoDb, 


// Where do we generally use node?

// cpu intesive vs io intensive -> 


// JS -> amongst the above two which one is easy for JS to handle?

// JS -> single threaded -> 

// Reason being the event driven architecture allows the smooth flow of io intensive tasks ->

// cpu intensive js hates why????
// because it can operate only on a single thread -> 
// and if that single thread is occupied we tend to run into problems ->>>

//  blocking code is a cpu intensive tasks
// while(i < 1000000000000000){
// 	i++
// }

// another client as well as any other external systems -> 


// Characteristics of node ->
// event driven 
// Non blocking IO 
// i/o intensive

// i/o intensive -> communication with the external systems 

// cpu intensive -> primary utilisation of processing power 

// why settimeout and setInterval works in node? ****

// gloabals are the once which provide us certain js engine functions, certain node specific functions and certain functions which existed in the browsers. 

// core moduels ->
// we consume these modueles we dont have to write them own our own. 

// exampless
// OS
// FS
// Path
// http

// and some more -> 

// the whole node cannot be coded in these moduels -> 
// creating our own module -> 

// index.js -> it is acting as a module ->


// to communicate between two files in react what did we use?
// import export -> are examples of ES6 module system ->


// There are 2 types of module systems -> 

// Es5 module system (common module system)->

// Es6 module system -> import and export -> 


// Browsers do not understand the Es5 module system -> 

// node js -> by default has es5 module system -> 

// require and module.exports 

// Can we use Es6 module system in node? 
// Yes, how? 


// intro to backend 
// intro to what is node 
// module system
// core modules -> 
// Mvc architecture ->
// booting up our first server in node -> 

// nodejs architecture -> 
// emitters -> 

// intro to express -> why it is needed?
// middlewares 
// routing 
// REST -> 
// Api -> get, post, put, patch, delete

// major focus over here on put vs patch -> 

// internal database storage -> making a crud app
// intro to mongo, mongoose, and setup
// making a crud with mongoose and node 
// data modelling -> 

// pagination -> 
// authenticaton, authorization, jwt, passport(optional we will see)

// projects -> newton -> 
// 1-2 from end -> fullstack -> 


// testing, docker, kubernetes, aws (lambda, ec instance, s3) -> 


// v8 engine algorithm -> 

// how js gets computed ->

// js is an interpreted langauge or a compiled langauge?

// "just in time compilation" -> research paper released by google on this? 

// on each mini compialtion -> it basically collects some data -> threough which it makes some judgements ->
// judgements for what??

// interpreter and optimising compiler -> pipeline 


// v8 | js -> 

// garbage collector -> ?? 

// variable -> 

// let a = 10;

// 1) garbage collector -> automatically removes for you -> unused variables
// 2) js -> closures -> 

// c++ -> alloc and malloc -> 

// JS -> 
// ____


// IP - the ip packets -> 
// byte of data ->
// header and data -> 
// begi



// TCP 

// HTTP 

// ----

// can communication happen without api? || can websites work without api?

// REPL -> Read Eval Print Loop -> 



// latency vs throughput -> tradeoffs -> 

// availability -> 

// how much availabel your backend is? 
// % ->
// 100 -> 90 -> 
// 90%

// server + app (logic) ->

// server ()

// 99.99 -> 4 nines
// 99 -> 2 nines

// 99.9999999 -> 9 nines -> Availabilty offered by aws -> 

// revision question ->
// how do we manage multiple servers at the backend when a client has to hit?


// horizontal scaling vs vertical scaling?


// IPv4 and IPv6 -> engineers -> 


// Bar raiser rounds -> 

// why do we have two kinds of ip? 

// we ran out of ipv4 address -> 



// Globals -> setTimeout, setInterval, console, process

// browsers -> setTimeout, setInterval, console 


// require, exports, __dirname, __filname, module -> IIFE -> 

// q) i want to read three files 
// 	fileA, fileB, fileC

// 	which contains the information -> file1, file2, file3 respectively 

// 	the condition is i want to read the file2 only if file1 has someinformation, and I want to read the file3 if file2 has some information




// fs -> CB 
// 	readFile -> asynchronous
// 	readFileSync -> synchrnous

// fs promise  -> promise
// 	readFile -> asynchronous

// difference between package.json vs package-lock.json

// do we need to push node_modules on the version control?

// what is a .gitIgnore file?

// what is npm?


// 1) difference between ~18.2.0 ^18.2.1 18.2.1 -> package.json
// major, minor exact -> 

// patch update
// minor update
// major update

// 18.2.0 -> 18.2.9 || any number change at the third place that is referred ot as a patch update -> which do not disturb the flow of the other things. 

// 18.2.0 -> 18.3.1 -> any mnumber changed at the second place is referred to as the minor update -> no code breaking hcanges are introduced, it can lead to small functionaly change but code wont breka -> 

// 18.2.0 -> 19.2.0  -> major update -> leads to code brekaing hcnages ->

// in react ->
// newton platform -> react 16 

// react 18 -> 

// react 16 on react 18 -> error -> ??
// react 18 introduced code breaking changes and you cannot run that react 16.

// react documentation -> 

// ^ ~ "no symbol" -> 


// commands we have -> 
// 1) basic command || core command -> npm init is a core command 
// 2) extensions (flags) -> npm init -y (it automaticlly creates package.json with default values)


// node vs express -> 
// express is a wrapper around node -> 
// express is a framework -> 
// can we acheive all the results without express? is express optional? Yes

// react -> library
// angular -> framework -> 

// develop frontend withotu the above -> optional ->

// why do we use them??
// 1) easeness -> setup (boilerplate), initial knowldge load 
// 2) optimization
// 3) reusability -> somebody has done things laready for you
// 4) more functionality already implemented

// node -> complex things -> 
// to do basic thigns you have to do a lot of code in node, which basically express has already taken care of. 

// wrapper -> 
// node -> 15 lines -> handle an incoming api -> express (wrapper) -> 1 line

// node core -> then the chances of errors are way higher -> 

// 1) setting up the server in node -> core node -> http module ->

// rest of the things incluing the server setup we would be doing in express -> 

// done express -> 

// 1-2 thigns more in node -> 

// advantage of learning node over express?
// 1) more control -> 
// 2) in express also yoiu might have better reasons or better understanding why to choose a certain thing over the other 
// 3) more understandin how node actually is working 

// with express you are workig on a highly abstracgted code hence you might not know how things are actually working inside. 

// routing -> express cake walk in comparision to node -> 


// priority -> lecture -> express top

// express documentation -> 

// node -> 
// node serever needs to be restarted manually when you need another code to be ran on the server -> ** 


// reserved ports -> 

// 80 -> http request 

// 443 -> https request 

// 3000, 4000 -> 

// that special variables or data is called as environment variables and they are basically stored in a file called as .env 

// for the dev purpose they are statically stored in the .env file but later on at the time of deployment, if have certain more conditions on it. 


// purpose of .env -> 
// 1) to store common thing throughout the code, which is developer dependent
// 	API -> react -> newton school -> project id, one more thing 
// 	Rapid api -> keys -> that is also for a particular developer -> 
// 	port -> 
// 	.env -> 
// 	jwt -> constants which are developmer -> 


// 	naman - react -> 3000, node -> 4000
// 	vishal - react - 4000, node -> 3000

// .env -> should this .env be pushed in the version control?

// we never ever push .env file -> 

// 	lifecycle -> 
// 		local development -> 
// 		SIT -> staging environment 
// 		UAT -> this can be there or canot
// 		Prod -> 

// 	software developemnt lifecycles ->
// 	ways you cna follow to develop a product -> 


// 	Agile model -> 
// 	sprint based model -> 
// 		a sprint can be from 7 days to generally maximum a month 

// 		15 days -> 
// 			and disucss what all thigns will be done by a particular develop during this 15 days. 

// 			designer | product manager | engg manager | developers | devops 

// 			once that -> tickets -> kanban -> Jira -> sprit


// 		your work will be reviwed -> what all got completed -> what all became backlog -> and why it became backlog -> 

// 		15 days would be desgined -> 

// 		1) significance of environments
// 		2) agile model
// 		3) plannign and the kanban board 

// /* 
// dot env does thjis for you
//     global -> process -> 
//     process.env.
// */

// amazon -> 

// /products -> html page which contains a lot of products and you send that file

// /categories -> categfories -> href -> 
// /profile -> html page which has user informaiton


// res.send
// res.sendFile
// res.redirect
// res.status().sendFile()
// res.json()


// 200 -> ok
// 201 -> created
// 204 -> no response 

// 400 -> bad request 
// 401 -> server knows who you are -> but you are not authorized for this
// 403 -> server doesnt even know who you are -> unauthorized ->
// 404 -> not found 

// 500 -> internal server error
// 502 -> 
// 503 ->

// 301 -> permanent redirect
// 302 -> tempiorary redirect 

// 305 ->

// REST -> rest defines the guidelines of how server and client communicate -> 

// stateless -> 
// uniform way of calling -> rest methods -> 
// api -> contract -> endpoint -> {}
// rest api -> 
// whether the frotnend can cache this data or not -> (generally this kind of discussion happends informally itself)

// rest methods -> 
// /get
// /post
// /put
// /patch
// /delete

// question) design the api end points along with method -> 

// CRUD -> on the backend for information related to books -> 


// [
// 	{
// 		id: 10,
// 		name: A,
// 		author: Aauthor,
// 		dateOfPublish: 10th October
// 	},
// 	{
// 		id: 20,
// 		name: B,
// 		author: BAuthor,
// 		dateOfPublish: 20th October
// 	},
// 	...imagine there are 10 more objects
// ]

// 1) get all books

// 	/books -> get



// 2) get a specific book from an id 
// 	/book/:id -> get

// 3) get a book with specific name
// 	/book/?name="somehthing"  /book/name/{name of the book} -> get
// 								/book/name/:name
	

// 4) delete a specific book
// 	/book/:id -> delete

// 5) update a specific book 
// 	/book/:id -> -> put
// 					-> patch

// 6) add a new book
// 	/book

// 7) suppose you want to add some information to a specific book -> 
		
// 	two approaches ->
// 	 post -> specific adding the data -> 

// 	 put patch -> updating a specific book -> 

// 8) books/newly-lauched ->get 

// top-rated -> default -> backend would send 10 results having the most rating

// methods ->

// get -> 
// post -> 
// delete -> 

// put vs patch ->

// put ->updating something -> you are sending the entire data, the data which is updated along with the data which is not updated ->

// patch -> updating something -> you are sending only the information which is updated, information which remains same wont be expected from the client.


// put ->
	
// book -> 
// THE info currently stored in the BE (database)
// {
// 	id: 10,
// 	name: A,
// 	author: Aauthor,
// 	dateOfPublish: 10th October
// },

// FE -> form -> this form has the ability that the user can change information

// Put
// payload : {
// 	id: 10,
// 	name: changed,
// 	author: Aauthor,
// 	dateOfPublish: 10th October
// }

// /book/:id
// patch: {
// 	name: changed
// }



// [{},{},{}] -> is this a valid json? Yes

// {} -> 

// query params and path params handling ->
// middleware ->
// routes -> 
// writing api -> 

// saturday -> revision, assignemnts, and some mini assignemnts from my end -> 
// sunday -> 95% -> regular lecture -> 


// Rest -> highly important -> guidelines -> 

// even if you follow /getbooks -> then the functioanlity will still work, it isnt like api would say not a valid way of calling the api 

// updating an information in the book with 10 ->
// post request -> update ->

// backend is also accepting post to update the book, then thats a valid api but not developer friendly. 

// api -> endpoint + same method ->


// -> general beleif is that whenever we are working with API -> data will be sent or received only in the form of json. 

// But this is not entirely true. 
// 99% json ->

// ->making api in backend and calling them through post 

// -> middlewares ->

// next keyword -> the purpose of the next keyword is to send the req, res to the next eligible receiver. 
// // app.get('/book', (req, res, next)=>{
// //     console.log('doing some oprocessing');
// //     next()
// // })

// // app.get('/book', (req, res) => {
// //     console.log('i got the request over here')
// //     res.send('middlewares executes')
// // })

// in the above scenario /book route is acting as the next receiver. 
// without next you wont be able to transfer the request

// middlewares is yet another extremeely important interview question ->

// the beauty backend -> 
// fs module
// making single api 
// db related questions

// three types of middleware 
// 1) custom middleare 
// 2) third party middleware -> cors, body parser, 
// 3) built in middlewares || express middlewares ->

// app.use -> to put something in each call -> can provide middlewares in this

// built in middlewares ->

// express.urlencoded({extended: false}) ->
// express.json()
// express.text() //you can proivde certain parameters over here


// each of the above helps in getting certain data from the body of the request and then basically it puts in the request.body and we can extract the information and then do the required operations


// Question on Topics covered till now->
// Usage of postman, fs module, apis

// {
// 	name: 'put some random name',
// 	age: '10',
// 	gender: 'male',
// 	hobbies: ['a', 'b', 'c', 'd'],
// }

// 1) make two api where from the frontend you are sending a response like above.
// 	/profile -> post
// 		you have to append the data to a profile.txt file -> 
// 			put the json itself in the file -> 
// 		after success -> send a json back to the frontend -> 
// 			success: true || success: false
// 	/compute -> post
// 		send a json back where you are sending 
// 		{sentance: my name is _, my hobbies are a, b, c, d}


// cors -> 
// cross origin resource sharing -> 

// rules ->

// 1) cors is not a bug its a security feature ->
// this security feature is provide by whom? browser -> 

// A) you cannot request anything from a server with different port number 
// 1) localhost:3000 and localhost:3010
// 2) you cannot request resources from a different domain 
// 3) on subdomain as well you cannot request for resources
// 4) http vs https ->
// 	https://www.facebook.com and http://www.facebook.com


// test.facebook.com ||

// cors -> necesarry -> ??

// disable security featues -> be very careful of what you are browsing over there? why?? because cors is not there. 
// third party extensions cors 
// fixing from the backend -> no error sitation -> 

// if you have a static website or a tighly coupled website where the fronent is not seaprated from the backend then ideally yoou dont require cors all over the internet..

// API -> because of the api endpoint -> api endpoint with certain data is not difficult? 
// chrome itself provides -> developer tools -> 


// //////////////////////////////////////
// browsers console end -> we are getting cors
// but from the two servers that we created we are not getting any cors. 
// the posibility over here that from these two servers we are not getting cors is because we are making a server to server request on node, but the reason that I am not pitting this. 

// to verify above we can involve react over here ->

// ///////////////////////////////////////

// preflight request ->

// Accept-control-allow-origin -> header 

// Cors package -> Accept-control-allow-origin 

// //app.use vs app.all -> 



// monolith architecture vs microservice -> 

// monolith -> 
// 1 server ->

// horizontal scaling ->
// then for the rest of the servers the code is copied in them.


// microservice -> 
// 	login
// 	blogs 
// 	handling db ->

// 	for different things we are having a different mini server -> 

// aws -> microservice architecture -> lambda (service) -> 

// cors -> tomorrow ->

// setup of express -> api 

// routing -> 

// nodemon -> restart the serverr -> t seconds -> 
// developer efficiency is important ->

// react -> server restarted -> saved the file, auto save -> 

// nodemon -> 


// //query params and path params -> 

// how to access them in express -> 

// nodemon -> 

// http module -> writeHead ->

// server to server -> (optimization -> ) -> 

// Virtal Server and localserver -> cors -> 

// local to local 

// react and node -> cors ()


// 2 types ->
// 1) frontend heavy fullstack developer
// 2) backend heavy fullstakc developer

// 3) netural - frontend and backend both equal

// Events -> 
// something happened and you are basically caputring it. 

// Events -> all technolgoies -> 

// FE -> events -> the most in them -> ??/how?

// user does some action -> button click -> event released and caputed -> 

// BE -> buttons -> etc -> 
// custom events -> 
// 1) number of times the backend was hit. 

// initiator -> x happens ->
// x calling ->

// create custom -> and then you set where to call that custom event ->

// Event module -> inbuilt in node ->
// just like -> fs, os




//  employees.json 

//  [
//  	{
//  		empId: 1,
//  		name: naman, 
//  		age: 10
//  	},
//  	{
//  		empId: 2,
//  		name: user2, 
//  		age: 13
//  	},
//  	{
//  		empId: 4,
//  		name: user4, 
//  		age: 15
//  	},
//  ]

//  MVC strucute -> 

//  1) Controller and Routes Setup ->
//  2) getEmployee -> specific id
//  3) delete employee -> 
//  4) upate employee ->
//  5) create employee -> 
//  6) get all employee ->

//  you do not have to update employee.json at any point of time. 
//  Memory for that session itself. 
//  delete, update -> 

//  7) add basic validations -> 
//  Post -> fe is sending may a number of not, if not return with a 404 in json format.
// {success: true, data: <latest_employee_json}


// databases -> 
// mongoose -> 

// sql vs nosql ->

// sql -> table format ->

// {
// 	id: 1,
// 	name: naman,
// 	email: namanjindal@gmail.com,
// 	pinCode: 110034,
// },
// {
// 	id: 1,
// 	name: Ambuj,
// 	email: ambuj@gmail.com,
// 	pinCode: 110033,
// 	contact: 9999999999,
// 	address: delhi, 3 more information
// },
// {
// 	5 information
// }


// read and write -> 
// 	NoSql -> generally has faster write and slower reads

// 		they scale up very easily -> 

// 	Sql -> generally has a slower write and faster read

// 		postgres ->
// 		mysql ->

// 	unstructured data ->


// read heavy -> profile 
// write heavy ->

// horizontal scaling and vertical scaling

// 1st normaolization
// 2nd normalation
// 3rd 
// 4th 
// 5th 

// noSql vs sql -> 

// noSql -> mongodb
// sql -> mysql 

// mongoose stand -> mognoose is an abstraction layer built over mongodb specifically for node.

// ORM -> Object Relatonal Mapper -> 
// ODM -> object document model

// mongoose is the ORM of mongoDb for node
// sequalize is the ORM of mysql for node

// select * from profileDb ->

// SQL -> 
// table 
// row 
// column
// table join

// colleciton
// document
// field
// lookup

// --------> mongoDb ->

// after installing -> restart system once -> 
// to verify if the installation is correct ->

// 1) cmd -> mongod --version
// if this works that means mongodb is correctly installed in your system

// 2) inside the visual studio code ->
// 	inside terminal -> mongod --version

// if the above works that means mongo db is available throughout your sysstem

// if the second one fails, that means your system wasnt able to configure environment file on its own. 


// connecting mongoose with node

// 1) Follow this path in your system -> 
// C:\Program Files\MongoDB\Server\6.0\bin 
// 2) double click where this path is getting displayed and copy itr
// 3) press windows keys and search for env 
// 4) click on edit the system variables
// 5) Environemnt variables -> system variables -> path -> edit -> new 
// 6) paste the path that you copied before and click ok ok ok and 
// 7) restart git bash / go to a new git bash and mongod --version


// schema vs model -> 

// schema is basically strucute -> rules -> 

// collection would follow -> 

// model -> is an abbstraction layer which utilises mongo and schema -> 
// model -> 
// 1) whatever rules you establish as part of the schema, model is the one which applies them to each document
// 2) model has the access to functions which eventually allow us to update thigns in the db


// Important functions in Mongooose -> 
// 1) connect -> helps us  connecting to the db ->
// 2) schema -> helps in creating the schema
// 3) model -> helps in providng model from a schema

// interacting with the database
// 1) create
// 2) findOneId
// 3) deleteOne

// understanding the complete flow of data

// validations in mongoose,
// custom validations in monogoose




// Encryption vs Hashing



// $2b$10$87cX0AAa0L4qIeOk5Iioued3RfSp8Mb6TSyLsKy31CznBtTD2qJqO


// $2b$10$4kH4BIbGxodH4CbXecm/5.PF.ZwArmqgLovtT7k02kzeXtjy0Qp8u


// 1) exec 
// 2) saltrounds -> salt in bcrypt 




// 1) signup and signin functionality -> very very very basic one 
// 	3rd party library -> bcrypt -> to store passwords

// 3) Pagination 

// 2) virtuals, connecting two schemas, pre and post hooks, and a few more things


// 4) Authentiction and authorization flows -> 
// 	OAuth
// 	OAuth2
// 	JWT  -> working of it

// 5) Assignemtns 

// 6) emitters ->  


// whatever you do from custome events the same thing you can do even with normal functions
// but but but

// 1) they provide some 
// 	1) isolation of code 
// 	2) the main function isnt concerned of their part 


// events -> 

// doubts? nodejs -> 

// 3) assignements
// 2) rate limiting -> 
// 1) url shortner -> live coding question
// 4) stage -> simple questions for nodejs -> covered -> 



// 1) Expose an endpoint which has certain logic to shorten the url, this url would be returned to the user. 
// 2) now when the user hits that shorten url, you reidrect the user to the original url given to us. 

// PS: 
// 1) Handle, multiple url getting shorten in one single application phase. 
// 2) perform proper error handling


// /shortenUrl



// rate limiter -> optimization techniq in nodejs
// you are limiting the clients to hit the server 

// bot -> website -> make your server go down ->

// dos -> denial of service -> 

// bot -> make too many api request in a short span of time

// 20000 api request from a single client -> 
// increase your resource consumption and eventually make your backend go down. 

// the other users on the  websiote might experience delay, orn might not able to get a response at all. 

// our system -> which deosnt require so many api hits from client -> 


// rate limiting -> 
// on a single client/ ip we restrict the number of api calls ->

// after a certain limit exceeds -> showing error to user -> already maximum time called->

// too many request, try later

// JWT -> Header + Payload + Signature -> 



// app.get('/profile', (req, res) => {
// 	const token = req.headers.authorization

// 	//Bearer rfhioefrfwejfowiefj
// })
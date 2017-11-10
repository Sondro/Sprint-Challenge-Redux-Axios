## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1 - Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?
	- "Single Source of Truth": A state object tree known as 'store'.
	
	- React is for rendering/updating JSX ReactDOM components.
		- Optional stateful components store their state
		in the rendering lifecycle.
	
	- Redux is a pluggable Flux model for API/database/server
	interaction. It replaces Model View Controller frameworks.
		- Has a global 'store' for state data management.
		- Trades rigid overhead for easily mutable states.

2 - Describe what an _Action_ is/does.
	- Data wrapped in an object and sent via store.dispatch() 
	to alter the store.
		- [!]NOTE: must have a type

3 - Describe what a _Reducer_ is/does.
	- a function with the params (previousState, action)
	 that returns or 'reduces' to the next state. 


4 - What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

HTTP
	- Hyptertext Transfer Protocol.

C reate
R ead
U pdate
D elete

GET()
	- Read server data/locally store it.

HEAD () 
	- Read server data/locally store it, but only from the HEAD 
     or header. Header data is much smaller and comprised of 
	notes about the BODY data.

PUT()
	- Write server data to a URI (URL/URN).

DELETE()
	- Remove/deactivate server data.
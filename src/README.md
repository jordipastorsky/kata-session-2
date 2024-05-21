# **Client management with react and hooks**

The idea of our company is to create a large application to manage clients. Therefore, Client management, from the first session, has been redeveloped using React due to its scalability.

Install dependencies: npm install
Run app: npm run dev

Exercise 1.

The client management app is not working. The client list is not being updated when a new client is added. However, when the website is reloaded, all clients are displayed correctly. Do you know why?

The principal engineer tells you to fix the issue by creating a context for the entire app and saving the list of clients into this context.

Exercise 2.

Even tough, Client management is working now, an improvement has been required. Once a client is added to the list, the fields are not cleaned.

The principal engineer tells you to fix the issue using useReduce, in order to avoid a set of functions, that modify the state, being triggered in a row.

Principal engineer would like to avoid this bad practise:
setName('');
setEmail('');
setPhone('');
setAddress('');

Extra: create a clear button.

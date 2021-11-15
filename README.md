# Online Resume Builder Application 

Creating a resume is a bit tedious task for any working professional from any industry. One has to keep it short, simple, and with the latest work experience, and constantly update it over a while.

## High-Level Approach

- Create a basic client-server setup of Node & React and install necessary libraries required.
- Build a React form by making modularized components using Material UI or React-Boostrap & calling these components in sequence to get required input data to generate resume.
- Process the information on the server(Node) and using some HTML to PDF libraries to generate the resume.
- Finally, make it auto-download on client side.

## How to setup and run the application  


* Make sure that you have node and npm installed. In your terminal, run - 
  
  ```
  node --version
  ```
  
  To install node, head over to [this website](https://nodejs.org/en/download/) and download the stable release. 

* Fork and clone this repository by runinng the following command in your terminal - 
  
  ```
  git clone https://github.com/<your_github_username>/resume-builder
  ```

* cd into the cloned repository using the following command - 
  
  ```
  cd resume-builder
  ```

* Install all the dependencies for the server side using the command -
  
  ```
  npm install
  ```

* The server can be run using the command - 
  ```
  npm run start
  ```

* The server now can be accessed on the port 4000

* The To install all the dependencies of the client side, run the following commands in your terminal
  ```
  cd client
  npm install
  ```

* To start using create-reacta-app, run the following command in the terminal (make sure you don't kill the previous terminal)
  ```
  npm run start
  ```

* You will be automatically taken to the development server where you can see the live application
  
  

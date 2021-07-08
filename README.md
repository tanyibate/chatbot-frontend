# Readme

A react app which make use of a chatbot component. The website was one of the first ever websited I created using pure HTML and CSS during my Full Stack Developer Journey. To create a theme around the chatbot I decided to make use of the TeaCozy website. The original TeaCozy repo/webiste can be found on my github.

## Prerequesities

Ensure that chatbot-backend repo is running first.
https://github.com/tanyibate/chatbot-backend.git

## Running the app

npm install
npm start

## Using the app

Login first, The login credentials are email:test@mail.com password:password. If login is unsuccesful register a new account and proceed with logging in. The chatbot has a set of questions it can answer the questions which the chatbot can answer can be found in the responses.js in the root of the backend repo.

## Standalone Chatbot component

If you want a standalone version of the chatbot feel free to go in to the components folder and copying the chatbot folder and importing the ChatBot component into your react app. But make sure to change the responseAPI constant in ./chatbot/chatbox/ChatBox and setting to your own API which will return an answer when a question is posted to it.

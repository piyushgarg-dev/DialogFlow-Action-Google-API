const {
    dialogflow,
    Image,
  } = require('actions-on-google')
  
  // Create an app instance
  const app = dialogflow()
  
  var username,useremail,blogtitle,blogbody='hello_test';

  // Register handlers for Dialogflow intents
  
  app.intent('Default Welcome Intent', agent => {
    agent.add(`Welcome to my agent!`);
  })
  
  app.intent('Default Fallback Intent', conv => {
    conv.ask(`I didn't understand. Can you tell me something else?`)
  })

  app.intent('get user name',agent=>{
    username = agent.parameters['given-name'];
    console.log('Name Set to: ',username);
  })

  app.intent('get user email',agent=>{
    useremail= agent.parameters['email'];
    console.log('Email Set to: ',useremail);
  })

  app.intent('get blog title',agent=>{
    blogtitle = agent.parameters['given-name'];
    console.log('Title Set to: ',blogtitle);
  })

  app.intent('get blog body',agent=>{
    blogbody =  agent.parameters['given-name'];
    console.log('Body Set to: ',blogbody);
    const apiurl = `http://randomblogs.herokuapp.com/api/3a6b9c12d`;
    const data = {
    email:useremail,
    title:blogtitle,
    body:blogbody
    };
    const options = {
    method:'POST',
      headers:{
      	'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    };
    fetch(apiurl,options)
    .then(res=>res.json())
    .then(data=>console.log(data));
  
  })
  
module.exports = app;
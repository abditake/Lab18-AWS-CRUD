const dynamoose = require('dynamoose');


// create schema
const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  deckType: String,
});

// creating model

const peopleModel = dynamoose.model('People', peopleSchema);


exports.handler = async (event) => {

  console.log(event.queryStringParameters);
  
  let {id, name, deckType} = event.queryStringParameters;
  let person = {id, name, deckType};

  let response = {statusCode: null,body: null};

  try {
    let updatePeopleRecord = await peopleModel.update(person);
    response.statusCode = 200;
    response.body = JSON.stringify(updatePeopleRecord);
  } catch (e) {
    console.error(e);
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }
};

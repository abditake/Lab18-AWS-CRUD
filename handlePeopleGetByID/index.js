const dynamoose = require('dynamoose');


// create schema
const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  deckType: String,
});

// creating model

const peopleModel = dynamoose.model('people', peopleSchema);


exports.handler = async (event) => {

  console.log(event.queryStringParameters);

  let {id} = event.queryStringParameters;

  let response = {statusCode: null,body: null};

  try {
    let personRecordById = await peopleModel.get({'id': id});
    response.statusCode = 200;
    response.body = JSON.stringify(personRecordById);
  } catch (e) {
    console.error(e);
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }
};

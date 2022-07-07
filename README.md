LAB 18 - Lambda-Upload
========

- Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services

- Database: DynamoDB
  - 1 Table required
- Routing: API Gateway
  - POST
  - /people - Given a JSON body, inserts a record into the database
  - returns an object representing one record, by its id (##)
  - GET
    - /people - returns an array of objects representing the records in the database
    - /people/## - returns an object representing one record, by its id (##)
  - PUT
    - /people/## - Given a JSON body and an ID (##), updates a record in the database
    - returns an object representing one record, by its id (##)
  - DELETE
    - /people/## - Given an id (##) removes the matching record from the database
    - returns an empty object

CRUD Operation Handlers: Lambda Functions

### Author: Abdinasir Yussuf

### Links and Resources


- **Example of Table**

  - [images.json](https://ay-lab-17-images.s3.us-west-2.amazonaws.com/images.json)

#### Lambda  function Handlers

-   `HandlPeopleGet`
-   `handlePeoplePost`
-   `handlePeoplePut`
-   `handlePeopleDelete`

#### JSON data added after uploading an Image

- handlePeopleGet
        
   ```  
  {
      "id": 1,
      "name": Micheal,
      "deck-type": "swordsoul"
  }
   ```

<hr>      

- handlePeopleGet
        
  ```
    {
      "id": 1,
      "name": Micheal,
      "deck-type": "swordsoul"
  },
    {
      "id": 2,
      "name": Horford,
      "deck-type": "dark-magician"
  }
  ```
       
- handlePeoplePut
    - get by ID
      ``` 
      {
        "id": 2,
        "name": Horford,
        "deck-type": "dark-magician"
      }

      ```

    - put 
      ```
      {
        "id": 2,
        "name": Horford,
        "deck-type": "Legendary-Fisherman"

      }

      ``` 
    - get by ID(again)
      ```
      {
        "id": 2,
        "name": Horford,
        "deck-type": "Legendary-Fisherman"
      }
      ``` 

<hr>
     
- handlePeopleDelete

    - all records before delete
      ```
       
        {
            "id": 1,
            "name": Micheal,
            "deck-type": "swordsoul"
      },
        {
            "id": 2,
            "name": Horford,
            "deck-type": "dark-magician"
      }
        
      ``` 
    - get by ID delete
      ```
      {
            "id": 2,
            "name": Horford,
            "deck-type": "dark-magician"
      }
      ``` 
    - get all records after delete 
      ```
      {
            "id": 1,
            "name": Micheal,
            "deck-type": "swordsoul"
      }
      ``` 
        
        
  

Sticking with the Yugioh theme in honor of the creator of the franchise Kazuki Takahashi. October 4,1961 - July 6,2022
#### Tests

-   testing using AWS debug gui mainly looking at the body of the
  http request itself

#### UML - Class example
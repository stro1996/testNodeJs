# Installation
	git clone git@github.com:stro1996/testNodeJs.git

# Setup
	Install mongDB: https://www.mongodb.com/
	brew services start mongo || mongod
	npm install ( need node 8.0.0)
	npm start

# Documentation

## General Info
	Header: {
		Accept : application/json
		Content-Type: application/json
	}

	General Error:
	
		status: 401  body : Unauthorized
		status: 404  body: "url": … not found"


## POST /auth/register

	boddy: {
	 	fullName: required,
		email: required,
		password: required
	}

	response:

		status: 200

		body: {
			token
		}
###### Example:
![Optional Text](../master/imagesForDoc/registration.png)
 ## POST /auth/sign_in

	body: {
		email: required,
		password: required

	}

	response:
		status: 200
		body: {
			token
		}
###### Example:
![Optional Text](../master/imagesForDoc/signIn.png)
 ## POST /item_card

	  body: {
  		name: required,
	  	discription: required
	  }

	  response: status 200

###### Example
![Optional Text](../master/imagesForDoc/post.png)
 ## GET /item_card

	response
		status: 200
		body :[
			{
				name,
				discription,
				created,
				createdBy,
				id
			}
		]
###### Example
![Optional Text](../master/imagesForDoc/getItems.png)
## GET /item_card/get_my

	response
		status: 200
		body: [
			{
				name,
				discription,
				created,
				createdBy,
				id
			}
		]
###### Example
![Optional Text](../master/imagesForDoc/getMy.png)
 ## PUT /item_card

	body: {
		id: required,
		name,
		description
	}
	
	response
		status: 200
		body : {
			newElement: {
				name,
				discription,
				created,
				createdBy,
				id
			}
		}
###### Example
![Optional Text](../master/imagesForDoc/put.png)
 ## DELETE /item_card

	body: {
		id: required
	}

	response: status 200
###### Example
![Optional Text](../master/imagesForDoc/delete.png)

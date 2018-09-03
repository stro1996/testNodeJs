Install mongDB: https://www.mongodb.com/

git clone

npm install ( need node 8.0.0)

brew services start mongo || mongod

npm start

Header: {
	Accept : application/json
	Content-Type: application/json
}

General Error:

	- status: 401  body : Unauthorized
	- status: 404  body: "url": … not found"


POST /auth/register

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

POST /auth/sign_in

	body: {
		email: required,
		password: required

	}

	response:
		status: 200
		body: {
			token
		}

POST /item_card

	  body: {
  		name: required,
	  	discription: required
	  }

	  response: status 200

GET /item_card

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

GET /item_card/get_my

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

PUT /item_card

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

DELETE /item_card

	body: {
		id: required
	}

	response: status 200

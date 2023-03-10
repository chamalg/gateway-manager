# gateway-manager
This is a REST service helps to store gateways and their associated devices

## Getting Started

1. CD into project folder and open a terminal window.
2. Install all the packages using $npm install. 
3. Modify the .env file DATABASE property providing your mongodb instance details.
4. Type $npm start to run the project 
5. To run test cases type $npm test

## API details

Method - GET (List gateways)
URL - http://localhost:6900/api/gateway


Method - GET (Get a specific gateway)
URL - http://localhost:6900/api/gateway/:serialNumber

Method - POST (Create a new gateway)
URL - http://localhost:6900/api/gateway


Method - PUT (Update a gateway)
URL - http://localhost:6900/api/gateway/:serialNumber

Method - DELETE (Delete a gateway)
URL - http://localhost:6900/api/gateway/:serialNumber


### Use following curl command to insert a sample record.

```
curl --location --request POST 'http://localhost:8000/api/gateway' \
--header 'Content-Type: application/json' \
--data-raw '{
	"serialNumber": "ABC1234778",
	"name": "Chamal",
	"ipv4Address": "192.168.2.5",
	"masterDeviceList": [
	{
		"uid": "124578",
		"vendor": "ZTE",
        "createdDate": "2023-02-13T18:10:58.940Z",
		"status": "Active"
	},
		{
		"uid": "123456789",
		"vendor": "ZTE",
        "createdDate": "2023-02-13T18:10:58.940Z",
		"status": "Active"
	}
	
	]
}'
```
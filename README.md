## Project
This project aims to expose 3 APIs and check if the results are as expected.

## Version
This project uses TypeScript and NodeJS 12.18.2

## Commands
To run this project, follow these steps:

To install the dependencies:
```
npm install
```

To run the project:
```
npm run dev
```

## Endpoints
These server has 3 endpoints:

1 - Receive parameters "name" and "surname", and return with uppercase first letter:
```
GET - http://localhost:5555/api/names?name=marco&surname=rossi
```

2 - Receive an array as input, and return the sum of all numbers:
```
POST - http://localhost:5555/api/arrays/sum

Body: {
  "numbers": [1,2,3]
}
```

3 - Receive an array as input, and return the array received without duplicates:
```
POST - http://localhost:5555/api/arrays/removeDuplicates

Body: {
	"values": [1,2,3,1,3,"marco",2,"marco"]
}
```

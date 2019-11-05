ctDoctor
========

ctDoctor is a RESTful API to complement the CTcue frontend assignment.

## Requirements

- NodeJS `>10.16.2`
- MongoDB `>3.4.9` - If needed, you can adjust the config in `./server/config.js`

## Loading the demo data

If mongoDB is installed, you can load the demo data using the following command:

```
mongorestore --db ctdoctor ctDoctorData/
```

This will setup the `ctdoctor` database. It will add the following collections: `medications`, `patients` and `visits` and some test data.

## Running

Install dependencies:

```
npm install
```

Start local server:

```
npm start
```

Build and run the production server:

```
npm run prod
```

## Back-end API

The API documentation for ctDoctor can be found at [http://localhost:3000](http://localhost:3000). Consult the API documentation for the data models and end-point instructions:

```
/api/patient/
/api/patient/{id}
/api/visit/
/api/medication/

... more end-points ...
```

You can browse to an endpoint (e.g [/api/patient/](http://localhost:3000/api/patient)) to get an interactive server-side middleware to visualize and run REST requests.

**NOTE**: You have to create entities prior to embedding them. For example, to add visits in patients you first have to create a visit.

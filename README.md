ctDoctor
========

ctDoctor is a RESTful API to complement the CTcue frontend assignment.

## Requirements

- NodeJS `>10.16.2`
- MongoDB `>3.4.9`
    - If needed, you can adjust the config in `./server/config.js`

## Loading the demo data

If mongoDB is installed, you can load the demo data using the following command:

```
mongorestore --db ctdoctor ctDoctorData/
```

This will setup the `ctdoctor` database. It will add the following collections: `medications`, `patients` and `visits` and some test data.

> Note: On windows you will have to

## Running

Install dependencies:

```
npm install
```

* Start of local server:

```
npm start
```

Building and running the production server:

```
npm run prod
```


## Back-end API

The API documentation for ctDoctor can be found at [http://localhost:3000](http://localhost:3000).

It exposes the following end-points:

```
/api/patient/
/api/visit/
/api/medication/
```

You can browse to an endpoint ( e.g `/api/patient/`) to get an interactive server-side middleware to visualize REST requests.

**NOTE**: Before you can embed and reference entities (i.e. visits in patients and medications in visits), they will have to be created prior to embedding them. Please consult the API documentation for the data models, end-point instructions and available methods.

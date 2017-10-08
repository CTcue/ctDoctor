define({ "api": [  {    "type": "post",    "url": "/api/medication",    "title": "Add a new medication",    "name": "AddMedication",    "group": "Medication",    "header": {      "examples": [        {          "title": "Header:",          "content": "{\n  \"Accept-Encoding\": \"application/json\"\n}",          "type": "application/json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"updatedAt\": \"2017-10-08T11:40:29.178Z\",\n  \"createdAt\": \"2017-10-08T11:40:29.178Z\",\n  \"name\": \"Ibuprofen\",\n  \"dose\": \"120mg\",\n  \"packageSize\": \"10 tablets\",\n  \"_id\": \"59da0ead38cb8764a192345b\"\n}",          "type": "application/json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity",          "type": "application/json"        }      ]    },    "parameter": {      "examples": [        {          "title": "Example:",          "content": "{\n  \"name\": \"Ibuprofen\",\n  \"dose\": \"120mg\",\n  \"packageSize\": \"10 tablets\",\n}",          "type": "application/json"        }      ],      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the Medication.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "dose",            "description": "<p>Dose of the Medication.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "packageSize",            "description": "<p>Package size.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/routes/medication.js",    "groupTitle": "Medication"  },  {    "type": "delete",    "url": "/api/medication/{id}",    "title": "Delete a medication entry",    "name": "DeleteMedication",    "group": "Medication",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p><code>Medication</code> _id.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/routes/medication.js",    "groupTitle": "Medication"  },  {    "type": "get",    "url": "/api/medication/{id}",    "title": "Get a medication",    "name": "GetMedication",    "group": "Medication",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"updatedAt\": \"2017-10-08T11:40:29.178Z\",\n  \"createdAt\": \"2017-10-08T11:40:29.178Z\",\n  \"name\": \"Ibuprofen\",\n  \"dose\": \"120mg\",\n  \"packageSize\": \"10 tablets\",\n  \"_id\": \"59da0ead38cb8764a192345b\"\n}",          "type": "application/json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found",          "type": "application/json"        }      ]    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p><code>Medication</code> _id.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/routes/medication.js",    "groupTitle": "Medication"  },  {    "type": "get",    "url": "/api/medication",    "title": "Get all medications",    "name": "GetMedications",    "group": "Medication",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n[{\n  \"updatedAt\": \"2017-10-08T11:40:29.178Z\",\n  \"createdAt\": \"2017-10-08T11:40:29.178Z\",\n  \"name\": \"Ibuprofen\",\n  \"dose\": \"120mg\",\n  \"packageSize\": \"10 tablets\",\n  \"_id\": \"59da0ead38cb8764a192345b\"\n},\n{\n  \"updatedAt\": \"2017-10-08T11:43:17.956Z\",\n  \"createdAt\": \"2017-10-08T11:43:17.956Z\",\n  \"name\": \"Vicodin\",\n  \"dose\": \"500mg\",\n  \"packageSize\": \"5 tablets\",\n  \"_id\": \"59da0f5538cb8764a192345c\"\n}]",          "type": "application/json"        }      ]    },    "version": "0.0.0",    "filename": "server/routes/medication.js",    "groupTitle": "Medication"  },  {    "type": "put",    "url": "/api/medication/{id}",    "title": "Update a medication",    "name": "UpdateMedication",    "group": "Medication",    "header": {      "examples": [        {          "title": "Header:",          "content": "{\n  \"Accept-Encoding\": \"application/json\"\n}",          "type": "application/json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"updatedAt\": \"2017-10-08T11:40:29.178Z\",\n  \"createdAt\": \"2017-10-08T11:45:29.178Z\",\n  \"name\": \"Ibuprofen\",\n  \"dose\": \"150mg\",\n  \"packageSize\": \"9 tablets\",\n  \"_id\": \"59da0ead38cb8764a192345b\"\n}",          "type": "application/json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity",          "type": "application/json"        }      ]    },    "parameter": {      "examples": [        {          "title": "Example:",          "content": "{\n  \"name\": \"Ibuprofen\",\n  \"dose\": \"150mg\",\n  \"packageSize\": \"9 tablets\",\n}",          "type": "application/json"        }      ],      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the Medication.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "dose",            "description": "<p>Dose of the Medication.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "packageSize",            "description": "<p>Package size.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/routes/medication.js",    "groupTitle": "Medication"  },  {    "type": "post",    "url": "/api/patient",    "title": "Add a new patient",    "name": "AddPatient",    "group": "Patient",    "header": {      "examples": [        {          "title": "Header:",          "content": "{\n  \"Accept-Encoding\": \"application/json\"\n}",          "type": "application/json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"59d8c84406b5eb5738f33f26\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"address\": \"Homestead 120\",\n  \"dateOfBirth\": \"1990-10-02T10:40:30.000Z\"\n  \"visits\": [],\n  \"updatedAt\": \"2017-10-08T10:42:37.263Z\",\n   \"createdAt\": \"2017-10-08T10:42:37.263Z\"\n}",          "type": "application/json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity",          "type": "application/json"        }      ]    },    "parameter": {      "examples": [        {          "title": "Example:",          "content": "{\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"address\": \"Homestead 120\",\n  \"dateOfBirth\": \"1990-10-02T10:40:30.000Z\",\n  \"visits\": []\n}",          "type": "application/json"        }      ],      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "firstName",            "description": "<p>Firstname of the Patient.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "lastName",            "description": "<p>Lastname of the Patient.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "address",            "description": "<p>Address of the Patient.</p>"          },          {            "group": "Parameter",            "type": "Date",            "optional": true,            "field": "dateOfBirth",            "defaultValue": "Date.now()",            "description": "<p>Date of birth of the patient</p>"          },          {            "group": "Parameter",            "type": "Array",            "optional": true,            "field": "visits",            "description": "<p><code>Visit</code> _id's of all patient visits</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/routes/patient.js",    "groupTitle": "Patient"  },  {    "type": "delete",    "url": "/api/patient/{id}",    "title": "Delete a patient",    "name": "DeletePatient",    "group": "Patient",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p><code>Patient</code> _id.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/routes/patient.js",    "groupTitle": "Patient"  },  {    "type": "get",    "url": "/api/patient/{id}",    "title": "Get a patient",    "name": "GetPatient",    "group": "Patient",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"59d8c84406b5eb5738f33f26\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"address\": \"Homestead 120\",\n  \"dateOfBirth\": \"1990-10-02T10:40:30.000Z\"\n  \"visits\": [],\n  \"updatedAt\": \"2017-10-08T10:42:37.263Z\",\n   \"createdAt\": \"2017-10-08T10:42:37.263Z\"\n}",          "type": "application/json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found",          "type": "application/json"        }      ]    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p><code>Patient</code> _id.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/routes/patient.js",    "groupTitle": "Patient"  },  {    "type": "get",    "url": "/api/patient",    "title": "Get all patients",    "name": "GetPatients",    "group": "Patient",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"59d8c84406b5eb5738f33f26\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"address\": \"Homestead 120\",\n  \"dateOfBirth\": \"1990-10-02T10:40:30.000Z\"\n  \"visits\": [],\n  \"updatedAt\": \"2017-10-08T10:42:37.263Z\",\n   \"createdAt\": \"2017-10-08T10:42:37.263Z\"\n},\n{\n  \"_id\": \"59d8c84406b5eb7844f33f27\",\n  \"firstName\": \"Sara\",\n  \"lastName\": \"McHue\",\n  \"address\": \"Homestead 125\",\n  \"dateOfBirth\": \"1993-01-02T11:23:60.000Z\"\n  \"visits\": [],\n  \"updatedAt\": \"2017-10-07T10:42:37.263Z\",\n  \"createdAt\": \"2017-10-07T10:42:37.263Z\"\n}]",          "type": "application/json"        }      ]    },    "version": "0.0.0",    "filename": "server/routes/patient.js",    "groupTitle": "Patient"  },  {    "type": "put",    "url": "/api/patient/{id}",    "title": "Update a patient",    "name": "UpdatePatient",    "group": "Patient",    "header": {      "examples": [        {          "title": "Header:",          "content": "{\n  \"Accept-Encoding\": \"application/json\"\n}",          "type": "application/json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"59d8c84406b5eb5738f33f26\",\n  \"firstName\": \"John\",\n  \"lastName\": \"McGreggor\",\n  \"address\": \"Homestead 120\",\n  \"dateOfBirth\": \"1990-10-02T10:40:30.000Z\"\n  \"visits\": [\n    {\n      \"_id\": \"59d8c83206b5eb5228f33f26\",\n      \"reasonOfVisit\": \"Headaches, unable to sleep\",\n      \"consult\": \"Take more sleep, using prescribed pills\",\n      \"dateOfVisit\": \"2017-10-08T10:39:22.263Z\",\n      \"prescribedMedication\": []\n      \"updatedAt\": \"2017-10-08T10:42:37.263Z\",\n      \"createdAt\": \"2017-10-08T10:42:37.263Z\"\n    }\n  ],\n  \"updatedAt\": \"2017-10-08T11:13:09.133Z\",\n  \"createdAt\": \"2017-10-08T10:42:37.263Z\"\n}",          "type": "application/json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity",          "type": "application/json"        }      ]    },    "parameter": {      "examples": [        {          "title": "Example:",          "content": "{\n  \"firstName\": \"John\",\n  \"lastName\": \"McGreggor\",\n  \"visits\": [\n     \"59d8c83206b5eb5228f33f26\"\n  ]\n}",          "type": "application/json"        }      ],      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "firstName",            "description": "<p>Firstname of the Patient.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "lastName",            "description": "<p>Lastname of the Patient.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "address",            "description": "<p>Address of the Patient.</p>"          },          {            "group": "Parameter",            "type": "Date",            "optional": true,            "field": "dateOfBirth",            "defaultValue": "Date.now()",            "description": "<p>Date of birth of the patient</p>"          },          {            "group": "Parameter",            "type": "Array",            "optional": true,            "field": "visits",            "description": "<p><code>Visit</code> _id's of all patient visits</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/routes/patient.js",    "groupTitle": "Patient"  },  {    "type": "post",    "url": "/api/visit",    "title": "Add a new visit",    "name": "AddVisit",    "group": "Visit",    "header": {      "examples": [        {          "title": "Header:",          "content": "{\n  \"Accept-Encoding\": \"application/json\"\n}",          "type": "application/json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"59d8c83206b5eb5228f33f26\",\n  \"reasonOfVisit\": \"Headaches, unable to sleep\",\n  \"consult\": \"Take more sleep, using prescribed pills\",\n  \"dateOfVisit\": \"2017-10-08T10:39:22.263Z\",\n  \"prescribedMedication\": []\n  \"updatedAt\": \"2017-10-08T10:42:37.263Z\",\n  \"createdAt\": \"2017-10-08T10:42:37.263Z\"\n}",          "type": "application/json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity",          "type": "application/json"        }      ]    },    "parameter": {      "examples": [        {          "title": "Example:",          "content": "{\n  \"reasonOfVisit\": \"Headaches, unable to sleep\",\n  \"consult\": \"Take more sleep, using prescribed pills\",\n  \"dateOfVisit\": \"2017-10-08T10:39:22.263Z\",\n  \"prescribedMedication\": []\n}",          "type": "application/json"        }      ],      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "reasonOfVisit",            "description": "<p>Reason of the Visit.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "consult",            "description": "<p>Given consult.</p>"          },          {            "group": "Parameter",            "type": "Date",            "optional": true,            "field": "dateOfVisit",            "defaultValue": "Date.now()",            "description": "<p>Date of the visit.</p>"          },          {            "group": "Parameter",            "type": "Array",            "optional": true,            "field": "prescribedMedication",            "description": "<p><code>Medication</code> _id's of all prescribed medicines.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/routes/visit.js",    "groupTitle": "Visit"  },  {    "type": "delete",    "url": "/api/visit/{id}",    "title": "Delete a visit",    "name": "DeleteVisit",    "group": "Visit",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p><code>Visit</code> _id.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/routes/visit.js",    "groupTitle": "Visit"  },  {    "type": "get",    "url": "/api/visit/{id}",    "title": "Get a visit",    "name": "GetVisit",    "group": "Visit",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"59d8c83206b5eb5228f33f26\",\n  \"reasonOfVisit\": \"Headaches, unable to sleep\",\n  \"consult\": \"Take more sleep, using prescribed pills\",\n  \"dateOfVisit\": \"2017-10-08T10:39:22.263Z\",\n  \"prescribedMedication\": [],\n  \"updatedAt\": \"2017-10-08T10:42:37.263Z\",\n  \"createdAt\": \"2017-10-08T10:42:37.263Z\"\n}",          "type": "application/json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found",          "type": "application/json"        }      ]    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p><code>Visit</code> _id.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/routes/visit.js",    "groupTitle": "Visit"  },  {    "type": "get",    "url": "/api/visit",    "title": "Get all visits",    "name": "GetVisits",    "group": "Visit",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"59d8c83206b5eb5228f98f27\",\n  \"reasonOfVisit\": \"Pain in chest, difficult to breathe.\",\n  \"consult\": \"Sent to hospital for more detailed checkup\",\n  \"dateOfVisit\": \"2017-10-02T10:39:22.263Z\",\n  \"prescribedMedication\": []\n  \"updatedAt\": \"2017-10-08T09:24:21.263Z\",\n  \"updatedAt\": \"2017-10-08T09:24:21.263Z\",\n},\n{\n  \"_id\": \"59d8c83206b5eb5228f33f26\",\n  \"reasonOfVisit\": \"Headaches, unable to sleep\",\n  \"consult\": \"Take more sleep, using prescribed pills\",\n  \"dateOfVisit\": \"2017-10-08T10:39:22.263Z\",\n  \"prescribedMedication\": []\n  \"updatedAt\": \"2017-10-08T10:42:37.263Z\",\n  \"createdAt\": \"2017-10-08T10:42:37.263Z\"\n}]",          "type": "application/json"        }      ]    },    "version": "0.0.0",    "filename": "server/routes/visit.js",    "groupTitle": "Visit"  },  {    "type": "put",    "url": "/api/visit/{id}",    "title": "Update a visit",    "name": "UpdateVisit",    "group": "Visit",    "header": {      "examples": [        {          "title": "Header:",          "content": "{\n  \"Accept-Encoding\": \"application/json\"\n}",          "type": "application/json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"59d8c83206b5eb5228f33f26\",\n  \"reasonOfVisit\": \"Headaches, unable to sleep properly for two weeks now.\",\n  \"consult\": \"Take more sleep, using prescribed pills. Come back in one week.\",\n  \"dateOfVisit\": \"2017-10-08T10:39:22.263Z\",\n  \"prescribedMedication\": [{\n      \"updatedAt\": \"2017-10-08T11:40:29.178Z\",\n      \"createdAt\": \"2017-10-08T11:40:29.178Z\",\n      \"name\": \"Ibuprofen\",\n      \"dose\": \"120mg\",\n      \"packageSize\": \"10 tablets\",\n      \"_id\": \"59da0ead38cb8764a192345b\"\n  }],\n  \"updatedAt\": \"2017-10-08T10:42:37.263Z\",\n  \"createdAt\": \"2017-10-08T10:42:37.263Z\"\n}",          "type": "application/json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity",          "type": "application/json"        }      ]    },    "parameter": {      "examples": [        {          "title": "Example:",          "content": "{\n  \"reasonOfVisit\": \"Headaches, unable to sleep properly for two weeks now.\",\n  \"consult\": \"Take more sleep, using prescribed pills. Come back in one week.\",\n  \"prescribedMedication\": [\n     \"59da0ead38cb8764a192345b\"\n  ]\n}",          "type": "application/json"        }      ],      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "reasonOfVisit",            "description": "<p>Reason of the Visit.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "consult",            "description": "<p>Given consult.</p>"          },          {            "group": "Parameter",            "type": "Date",            "optional": true,            "field": "dateOfVisit",            "defaultValue": "Date.now()",            "description": "<p>Date of the visit.</p>"          },          {            "group": "Parameter",            "type": "Array",            "optional": true,            "field": "prescribedMedication",            "description": "<p><code>Medication</code> _id's of all prescribed medicines.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/routes/visit.js",    "groupTitle": "Visit"  }] });

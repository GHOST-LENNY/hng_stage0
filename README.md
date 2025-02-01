# HNG12 STAGE0 Public API

## Project Overview
This is a simple public API developed for HNG12, returning essential details in JSON format, including:

 - The registered email address. The current datetime in ISO 8601 format  (UTC). 
 - The GitHub repository URL containing the project code. 
 - The API is built using Node.js with Express.js and deployed for public access.

**Tech Stack**

Backend: Node.js, Express.js
Deployment: Render
Version Control: GitHub
CORS Handling: Enabled with Express CORS middleware

## **Setup Instructions**

**Prerequisites**

Ensure you have the following installed:

 1. Node.js (v16+ recommended)
 2. Git Installation & Running Locally

Clone the repository:

    git clone https://github.com/GHOST-LENNY/hng_stage0/


Install dependencies:


    npm install

Start the server:

    npm start

Test the API locally: 
Open your browser or use Postman to visit:

http://localhost:7777/


**API Documentation**

Base URL (Deployed API Endpoint)
[https://hng-stage0-ure6.onrender.com](https://hng-stage0-ure6.onrender.com)

 **- Endpoint:**

GET /
Returns essential details in JSON format.

**Request Format:**

No request parameters required.

Response Format (200 OK):

    {
        email: "lennyddon@gmail.com",
            current_datetime: new Date(),
            github_url: "https://github.com/GHOST-LENNY/hng_stage0.git"
    }

 - Example Usage

Using JavaScript (Fetch API):

    fetch(https://hng-stage0-ure6.onrender.com/)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

  

**Deployment**

The API is deployed on Render and is publicly accessible.

HERE: [https://hng-stage0-ure6.onrender.com](https://hng-stage0-ure6.onrender.com)

 
**Related Link**

Interested in Node.js developers? Visit: 👉 
https://hng.tech/hire/nodejs-developers


**License**

This project is open-source and available under the MIT License.


**Author**

Lennyy

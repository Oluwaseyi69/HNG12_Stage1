# HNG12_Stage1

# Number Classification API

🛠️ Technology Stack
Backend: Node.js (Express)
Hosting: Render
Version Control: GitHub
API Integration: Numbers API

## Overview
This API classifies a given number by checking its mathematical properties (prime, perfect, Armstrong, etc.) and provides a fun fact.

# Installation 

# Clone this repository

git clone https://github.com/Oluwaseyi69/HNG12-Stage1.git

# Navigate into the project directory
cd HNG12-Stage1
# Install dependencies:
npm install

# Create a .env file
PORT=
NUMBERS_API_URL=http://numbersapi.com

# Start the server
node index.js


## Endpoint
**GET** `/api/classify-number?number=4`

### Example Response (200 OK)
```json
{
    "number": 4,
    "is_prime": false,
    "is_perfect": false,
    "properties": [
        "armstrong",
        "even"
    ],
    "digit_sum": 4,
    "fun_fact": "4 is the number of bits in a nibble, equivalent to half a byte."
}

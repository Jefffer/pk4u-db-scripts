<p align="center">
  <img src="https://github.com/Jefffer/pk4u-frontend/blob/main/public/logo-transparent.png" alt="PK4U Logo" width="120"/>  
</p>

<p align="center">
  <img src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png" alt="node" width="160"/>
</p>

# 🅿️ PK4U-DB-Scripts: Population Tool for MongoDB
This repository contains Node.js scripts designed to facilitate **initial data population and simulation** in your MongoDB database for the **PK4U (Parking for You)** system. These scripts will allow you to insert parking information and generate parking spot data per floor, which is essential for the application's operation.

## 🚀 Getting Started

Follow these steps to clone the repository, set up your environment, and run the scripts to populate your MongoDB database.

### 📋 Prerequisites

Make sure you have the following installed on your system before proceeding:

* **Node.js**: Version `v18` or higher. You can download it from [nodejs.org](https://nodejs.org/).
* **npm** (Node Package Manager): Automatically included with Node.js installation.
* **MongoDB Atlas (or a local MongoDB instance)**: You will need an accessible MongoDB database for the scripts to interact with. Using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) is recommended for quick and easy setup.

### ⬇️ Clone the Repository

First, clone this repository to your local machine using Git and navigate to the project directory:

```bash
git clone https://github.com/Jefffer/pk4u-db-scripts.git
cd pk4u-db-scripts
```

### 📦 Install Dependencies
Once inside the project folder, install the necessary dependencies. Use `npm init -y` to create a `package.json` file if it doesn't already exist, then install the libraries:

```bash
npm init -y # Only if you don't have a package.json
npm install mongodb dotenv
```

* `mongodb`: This is the official MongoDB driver for Node.js, essential for the scripts to connect and interact with your database.
* `dotenv`: A lightweight and secure library that loads environment variables from an `.env` file into `process.env`, preventing sensitive credentials from being directly exposed in the source code.

### ⚙️ Environment Configuration
For the scripts to establish a connection with your MongoDB database, it's crucial to configure your connection string.

1.  In the root of the `pk4u-db-scripts` folder, create a new file named `.env`.
2.  Inside this `.env` file, add your MongoDB Atlas connection string (or the URL of your local MongoDB instance). The format should be as follows:

```bash
MONGODB_URI="mongodb+srv://<username>:<password>@<your-cluster-url>/pk4u?retryWrites=true&w=majority"
```

⚠️ **Important!**

Replace `<username>`, `<password>`, and `<your-cluster-url>` with your own credentials and the URL of your MongoDB Atlas cluster.

### 🏃 Run Population Scripts
Once you have cloned the repository and configured the `.env` file, you are ready to run the population script.

To run the `generateSpots.js` script and populate your database:

```bash
node generateSpots.js
```

This script will perform the following actions:

* Connect to your MongoDB database using the connection string provided in the `.env` file.
* Insert predefined parking information (or whatever is configured in the `generateSpots.js` script).
* Generate detailed spot information for each parking level, simulating initial availability.

---
## 🌟 What is PK4U?

In modern cities, finding parking has become a daily challenge that causes stress and unnecessarily increases traffic and pollution. This phenomenon, known as _cruising for parking_, negatively affects the quality of life and urban sustainability.

**PK4U** was created to address this problem by offering an open-source solution that centralizes and displays real-time parking availability in a city. Our platform unifies data from multiple parking facilities into a single interface with interactive maps, empowering drivers to make better decisions and contributing to smarter, more sustainable mobility.

### 💻 Core Technology Stack

| Área                | Tecnologías Clave                                                              |
| ------------------- | ------------------------------------------------------------------------------ |
| **Frontend** | `React` `Vite` `React Router` `Tailwind CSS` `Leaflet` `i18next`                 |
| **Backend** | `Java` `Spring Boot` `Spring Cloud`                                            |
| **Data & Search**| `MongoDB` `Elasticsearch`                                                      |
| **Communication** | `REST API` `RabbitMQ`                                                          |
| **Architecture** | `Microservicios` `API Gateway` `Service Registry (Eureka)`                     |

### 🤝 Contribution
Your help is welcome! If you wish to contribute to this script project, please feel free to:

* Open an **Issue** to report a problem or propose an improvement.
* Open a **Pull Request** with your changes and contributions.

### 📄 License
This project is distributed under an Open Source license, encouraging collaboration and transparency in the development of solutions for Smart Cities.

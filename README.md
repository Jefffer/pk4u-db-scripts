# 🅿️ PK4U-DB-Scripts: Herramienta de Población para MongoDB
<!--
![PK4U Logo](https://raw.githubusercontent.com/Jefffer/pk4u-frontend/main/public/pk4u-v1.png)
-->
Este repositorio contiene scripts Node.js diseñados para facilitar la **población inicial y la simulación de datos** en tu base de datos MongoDB para el sistema **PK4U (Parking for You)**. Estos scripts te permitirán insertar información de parkings y generar datos de plazas de aparcamiento por planta, esenciales para el funcionamiento de la aplicación.

## 🚀 Empezando

Sigue estos pasos para clonar el repositorio, configurar tu entorno y ejecutar los scripts para poblar tu base de datos de MongoDB.

### 📋 Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema antes de continuar:

* **Node.js**: Versión `v18` o superior. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
* **npm** (Node Package Manager): Se incluye automáticamente con la instalación de Node.js.
* **MongoDB Atlas (o una instancia local de MongoDB)**: Necesitarás una base de datos MongoDB accesible para que los scripts puedan interactuar con ella. Se recomienda el uso de [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para una configuración sencilla y rápida.

### ⬇️ Clonar el Repositorio

Primero, clona este repositorio en tu máquina local usando Git y navega hasta el directorio del proyecto:

```bash
git clone [https://github.com/Jefffer/pk4u-db-scripts.git](https://github.com/Jefffer/pk4u-db-scripts.git)
cd pk4u-db-scripts
```

### 📦 Instalación de Dependencias
Una vez dentro de la carpeta del proyecto, instala las dependencias necesarias. Utiliza `npm init -y` para crear un archivo `package.json` si aún no existe, y luego instala las librerías:

```bash
npm init -y # Solo si no tienes un package.json
npm install mongodb dotenv
```

* `mongodb`: Este es el driver oficial de MongoDB para Node.js, esencial para que los scripts puedan conectarse e interactuar con tu base de datos.
* `dotenv`: Una librería ligera y segura que carga variables de entorno desde un archivo `.env` en `process.env`, evitando que tus credenciales sensibles queden expuestas directamente en el código fuente.

### ⚙️ Configuración del Entorno
Para que los scripts puedan establecer una conexión con tu base de datos MongoDB, es fundamental configurar tu cadena de conexión.

1. En la raíz de la carpeta `pk4u-db-scripts`, crea un nuevo archivo llamado `.env`.
2. Dentro de este archivo `.env`, añade tu cadena de conexión a MongoDB Atlas (o la URL de tu instancia local de MongoDB). El formato debe ser el siguiente:

```bash
MONGODB_URI="mongodb+srv://<username>:<password>@<your-cluster-url>/pk4u?retryWrites=true&w=majority"
```

⚠️ ¡Importante!

Reemplaza `<username>`, `<password>` y `<your-cluster-url>` con tus propias credenciales y la URL de tu clúster de MongoDB Atlas.

### 🏃 Ejecutar los Scripts de Población
Una vez que hayas clonado el repositorio y configurado el archivo `.env`, estás listo para ejecutar el script de población.

Para ejecutar el script `generateSpots.js` y poblar tu base de datos:

```bash
node generateSpots.js
```

Este script realizará las siguientes acciones:

* Se conectará a tu base de datos MongoDB utilizando la cadena de conexión proporcionada en el archivo `.env`.
* Insertará la información de los parkings predefinidos (o la que se haya configurado en el script `generateSpots.js`).
* Generará la información detallada de las plazas por cada nivel de parking, simulando la disponibilidad inicial.

## 🌟 ¿Qué es PK4U?

PK4U es una aplicación web de código abierto que permite la visualización en tiempo real de la disponibilidad de plazas de aparcamiento en diversos establecimientos urbanos. Su objetivo es centralizar esta información en una única plataforma accesible para los ciudadanos, mejorando así la movilidad urbana en el contexto de una Smart City. 

### 💻 Componentes Principales de PK4U:

El sistema PK4U se compone de varias partes, trabajando en conjunto para ofrecer una solución integral de gestión de aparcamientos:

* **Frontend**: La interfaz de usuario intuitiva y reactiva desarrollada con **React.js** que permite a los ciudadanos visualizar los parkings en un mapa interactivo y consultar su disponibilidad en tiempo real. 
    * **Repositorio Frontend**: [https://github.com/Jefffer/pk4u-frontend](https://github.com/Jefffer/pk4u-frontend)
* **Backend**: El servidor robusto construido con **Java** y **Spring Boot** que maneja la lógica de negocio, procesa las actualizaciones de los datos de ocupación (simuladas por estos scripts) y sirve la información al Frontend a través de una API RESTful. 
    * **Repositorio Backend**: [https://github.com/MMunozLo/PK4U-backend.git](https://github.com/MMunozLo/PK4U-backend.git)
* **DB Scripts (Este Repositorio)**: Esta herramienta es crucial para inicializar y mantener la base de datos, insertando la estructura de spots y generando la información detallada de las plazas por cada planta.
* **Simulador**
* **API Gateway**
* **Eureka**

🤝 Contribución
¡Tu ayuda es bienvenida! Si deseas contribuir a este proyecto de scripts, por favor, siéntete libre de:

Abrir una **Issue** para reportar un problema o proponer una mejora.
Abrir una **Pull Request** con tus cambios y contribuciones.

### 📄 Licencia
Este proyecto se distribuye bajo una licencia Open Source, fomentando la colaboración y la transparencia en el desarrollo de soluciones para Smart Cities.

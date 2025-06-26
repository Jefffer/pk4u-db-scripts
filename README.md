# 🅿️ PK4U-DB-Scripts: Herramientas de Población para MongoDB

![PK4U Logo](https://raw.githubusercontent.com/Jefffer/pk4u-frontend/main/public/pk4u-v1.png)

Este repositorio contiene scripts Node.js diseñados para facilitar la **población inicial y la simulación de datos** en tu base de datos MongoDB para el sistema **PK4U (Parking for You)**. Estos scripts te permitirán insertar información de parkings y generar datos de plazas de aparcamiento por planta, esenciales para el funcionamiento de la aplicación.

## 🌟 ¿Qué es PK4U?

PK4U es una aplicación web de código abierto que permite la visualización en tiempo real de la disponibilidad de plazas de aparcamiento en diversos establecimientos urbanos. Su objetivo es centralizar esta información en una única plataforma accesible para los ciudadanos, mejorando así la movilidad urbana en el contexto de una Smart City. 

### 💻 Componentes Principales de PK4U:

El sistema PK4U se compone de varias partes, trabajando en conjunto para ofrecer una solución integral de gestión de aparcamientos:

* **Frontend**: La interfaz de usuario intuitiva y reactiva desarrollada con **React.js** que permite a los ciudadanos visualizar los parkings en un mapa interactivo y consultar su disponibilidad en tiempo real. 
    * **Repositorio Frontend**: [https://github.com/Jefffer/pk4u-frontend](https://github.com/Jefffer/pk4u-frontend)
* **Backend**: El servidor robusto construido con **Java** y **Spring Boot** que maneja la lógica de negocio, procesa las actualizaciones de los datos de ocupación (simuladas por estos scripts) y sirve la información al Frontend a través de una API RESTful. 
    * **Repositorio Backend**: [https://github.com/MMunozLo/PK4U-backend.git](https://github.com/MMunozLo/PK4U-backend.git)
* **DB Scripts (Este Repositorio)**: Estas herramientas son cruciales para inicializar y mantener la base de datos, insertando la estructura de parkings y generando la información detallada de las plazas por cada planta, simulando la entrada de datos de sensores. 

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

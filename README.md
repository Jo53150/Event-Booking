# Event Booking System

## Descripción

Este proyecto es un sistema de reservas de eventos que consta de una aplicación web con un frontend en React y un backend en Node.js utilizando Express y Apollo Server. El sistema permite a los usuarios registrarse, iniciar sesión, consultar eventos disponibles y realizar reservas.

## Tecnologías Utilizadas

- **Frontend**:
  - React
  - React Router DOM
  - Chart.js (para gráficos)
  - Axios (para solicitudes HTTP)
- **Backend**:
  - Node.js
  - Express
  - Apollo Server (para GraphQL)
  - MongoDB (para la base de datos)
- **Herramientas**:
  - Webpack
  - Babel
  - ESLint
  - dotenv (para manejo de variables de entorno)

## Estructura del Proyecto

- **client/**: Contiene el código fuente del frontend de la aplicación React.
- **graphql/**: Contiene los esquemas y resolvers de GraphQL para la parte del backend.
- **helpers/**: Funciones auxiliares para el backend.
- **middleware/**: Middleware personalizado para el backend.
- **node_modules/**: Dependencias del proyecto.
- **.env**: Archivo para las variables de entorno (no se debe incluir en el control de versiones).
- **app.js**: Archivo principal del servidor backend.
- **package.json**: Contiene la configuración de dependencias y scripts de NPM.
- **.gitignore**: Archivos y directorios que Git debe ignorar.

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. **Instala las dependencias**:

Navega a la carpeta raíz del proyecto y ejecuta:

```
cd Event-Booking
npm install
```

Luego navega al directorio 'client' y ejecuta:

```
cd client 
npm install
```

3. **Configura las variables de entorno**:

Crea un archivo `.env` en la raiz del proyecto con la siguient estructura. Asegúrate de reemplazar "tu_uri_de_mongobd" con la URI de tu base de datos de MongoDB.

```
MONGODB_URI=tu_uri_de_mongodb
```

Asegúrate de que el archivo .env esté en el .gitignore para no exponer tus credenciales en el control de versiones.

4. **Ejecuta el proyecto**:

* Para el backend:
Navega a la carpeta raíz del proyecto y ejecuta

```
npm start
```

Esto iniciará la aplicación React en `http://localhost:3000`

5. **Verifica el funcionamiento**:

Frontend: Abre tu navegador y ve a http://localhost:3000. Aquí podrás ver la aplicación web y probar sus funcionalidades.

Backend: La API GraphQL estará disponible en http://localhost:8000/graphql. Puedes utilizar herramientas como GraphQL Playground o Postman para probar las consultas y mutaciones.


# MELI Project

Desarrollado por: Lorena Rojas

Este projecto consta de dos partes:

- Api desarrollado en Node con Express retornando la información necesaria de los productos consultados.
- Aplicación desarrollada en react que consta de un input para consulta de productos, presentación de resultados y página de detalle de producto.

## Instalación

Para instalar esta aplicación siga los siguiente pasos:

### 1. Iniciar API

- clonar el proyecto [https://github.com/loreprocks/meli-project](https://github.com/loreprocks/meli-project)
- dentro de la carperta meli-project/ ejecute `npm install`
- luego cambiar de carpeta a server meli-project/server y ejecutar `npm install`
- dentro de la carpeta server crear un archivo .env con las siguientes variables:
  - PORT=4000
  - BASE_API_URL=https://api.mercadolibre.com
  - SEARCH_PATH=sites/MLA/search
- luego dentro de la carpeta raiz meli-project crear un archivo .env y agregar la siguiente variable
  - REACT_APP_API_URL= "http://localhost:4000/api/v1"
- Iniciar Servideor `npm run server`
- Iniciar la aplicación en React `npm start`
- Ejecución de pruebas `npm run test`

- Acceder a la aplicación desde: [http://localhost:3000](http://localhost:3000)

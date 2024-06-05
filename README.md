<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v4
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, Inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->
# LambdaExpressAPI-students

## Descripción

Este proyecto es una API REST construida con Express.js y TypeScript. Proporciona operaciones CRUD para estudiantes y utiliza una clave API para autenticar las solicitudes. Además, está configurado para funcionar con AWS Lambda utilizando el paquete `serverless-http`.

## Requisitos

- Node.js
- npm
- AWS Lambda (opcional)

## Configuración del entorno local

1. Clona el repositorio: `git clone url_del_repositorio`
2. Navega al directorio del proyecto: `cd nombre_del_proyecto`
3. Instala las dependencias: `npm install`
4. Crea un archivo `.env` en la raíz del proyecto y añade tu `API_KEY`: 

## Ejecución en entorno local

1. Compila el proyecto: `npm run build`
2. Inicia el servidor: npm run dev`
3. El servidor debería estar corriendo en `localhost:3000`

## Uso

Para hacer una solicitud a la ruta `/students`, debes incluir la `API_KEY` en la cabecera `X-API-KEY` de tu solicitud.
Los campos son los siguientes:

### Operaciones CRUD

- **Crear (POST /students)**: Crea un nuevo estudiante. Debes incluir los detalles del estudiante en el cuerpo de la solicitud en formato JSON. Aquí tienes un ejemplo de los datos que podrías enviar:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 20,
  "grade": "Sophomore"
}

* firstName (string): El nombre del estudiante.
* lastName (string): El apellido del estudiante.
* age (number): La edad del estudiante.
* grade (string): El grado del estudiante.

Leer (GET /students): Obtiene una lista de todos los estudiantes.

Actualizar (PUT /students/:id): Actualiza los detalles de un estudiante existente. Debes incluir los nuevos detalles del estudiante en el cuerpo de la solicitud.

Eliminar (DELETE /students/:id): Elimina un estudiante existente.

## Despliegue en AWS Lambda

Para desplegar esta aplicación en AWS Lambda, sigue estos pasos:

1. Asegúrate de tener instalado y configurado el [AWS CLI](https://aws.amazon.com/cli/) y el [Serverless Framework](https://www.serverless.com/framework/docs/getting-started/).

2. Configura tus credenciales de AWS. Puedes hacerlo ejecutando `aws configure` y siguiendo las instrucciones, o configurando las variables de entorno `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` y `AWS_REGION`.

3. En el directorio del proyecto, ejecuta `serverless deploy`. Esto empaquetará y desplegará tu aplicación en AWS Lambda.

4. Una vez que el despliegue se haya completado, Serverless imprimirá la URL de tu API en la consola. Puedes usar esta URL para interactuar con tu API.

5. Recuerda configurar tu `API_KEY` en las variables de entorno de la función Lambda en la consola de AWS.

Nota: Este proyecto está configurado para usar el paquete `serverless-http`, que permite a Express.js funcionar en AWS Lambda.

------

## Pruebas

Este proyecto utiliza [Jest](https://jestjs.io/) para realizar pruebas unitarias. Aquí tienes algunos ejemplos de cómo podrías escribir y ejecutar pruebas para las rutas de tu API:

```typescript
// tests/students.test.ts
import request from 'supertest';
import app from '../src/app';

describe('GET /students', () => {
  it('should return a list of students', async () => {
    const res = await request(app).get('/students');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('students');
  });
});

describe('PUT /students/:id', () => {
  it('should update a student', async () => {
    const res = await request(app).put('/students/1').send({
      firstName: 'John',
      lastName: 'Doe',
      age: 20,
      grade: 'A'
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('student');
    expect(res.body.student.firstName).toEqual('John');
  });
});

describe('DELETE /students/:id', () => {
  it('should delete a student', async () => {
    const res = await request(app).delete('/students/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Student deleted');
  });
});

# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
serverless deploy
```

After running deploy, you should see output similar to:

```
Deploying "serverless-http-api" to stage "dev" (us-east-1)

✔ Service deployed to stack serverless-http-api-dev (91s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: serverless-http-api-dev-hello (1.6 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [HTTP API (API Gateway V2) event docs](https://www.serverless.com/framework/docs/providers/aws/events/http-api).

### Invocation

After successful deployment, you can call the created application via HTTP:

```
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to:

```json
{ "message": "Go Serverless v4! Your function executed successfully!" }
```

### Local development

The easiest way to develop and test your function is to use the `dev` command:

```
serverless dev
```

This will start a local emulator of AWS Lambda and tunnel your requests to and from AWS Lambda, allowing you to interact with your function as if it were running in the cloud.

Now you can invoke the function as before, but this time the function will be executed locally. Now you can develop your function locally, invoke it, and see the results immediately without having to re-deploy.

When you are done developing, don't forget to run `serverless deploy` to deploy the function to the cloud.

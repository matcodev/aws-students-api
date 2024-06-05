import { v4 } from 'uuid';
import AWS from 'aws-sdk';

interface Student {
  id: string;
  name: string;
  lastName: string;
  age: string;
  grade: string;
  createdAt: string;
}

interface Event {
  body: string;
}

const addStudent = async (event: Event): Promise<any> => {
  try {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    const { name, lastName, age, grade } = JSON.parse(event.body);
    const createdAt = new Date().toDateString();
    const id = v4();

    const newStudent: Student = {
      id,
      name,
      lastName,
      age,
      grade,
      createdAt
    };

    await dynamoDB
      .put({
        TableName: 'Students',
        Item: newStudent
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Student added successfully',
        id: newStudent.id,
        name: newStudent.name,
      })
    };
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: error.message,
        })
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'An unknown error occurred',
        })
      };
    }
  }
};

export { addStudent };
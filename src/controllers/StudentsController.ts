import { v4 } from 'uuid';
import AWS from 'aws-sdk';
import { Body, Post, Route, SuccessResponse, Get, Tags, Path, Put, Delete } from 'tsoa';

export interface Student {
  id: string;
  name: string;
  lastName: string;
  age: string;
  grade: string;
  createdAt: string;
}

export interface StudentCreationRequest {
  name: string;
  lastName: string;
  age: string;
  grade: string;
}

export interface StudentUpdateRequest {
  name: string;
  lastName: string;
  age: number;
  grade: number;
}

@Route('students')
export class StudentsController {
  @Post()
  @SuccessResponse('201', 'Created') // This is for the swagger
  public async createStudent(@Body() requestBody: StudentCreationRequest): Promise<Student> {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    const { name, lastName, age, grade } = requestBody;
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

    return newStudent;
  }

  @Get('/')
  @Tags('Students')
  public async getStudents(): Promise<any> {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: 'Students',
    };

    try {
      const data = await dynamoDB.scan(params).promise();
      return {
        statusCode: 200,
        body: JSON.stringify(data.Items),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal Server Error' }),
      };
    }
  }

  @Get('{id}')
  @Tags('Students')
  public async getStudent(@Path() id: string): Promise<any> {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    try {
      const result = await dynamoDB
        .get({
          TableName: "Students",
          Key: {
            id,
          },
        })
        .promise();

      const student = result.Item;

      return {
        statusCode: 200,
        body: JSON.stringify(student),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Internal Server Error" }),
      };
    }
  }

  @Put('{id}')
  @Tags('Students')
  public async updateStudent(@Path() id: string, @Body() requestBody: StudentUpdateRequest): Promise<any> {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const studentData = requestBody;

    const params = {
      TableName: 'Students',
      Key: {
        id
      },
      ExpressionAttributeNames: {
        '#name': 'name',
        '#lastName': 'lastName',
        '#age': 'age',
        '#grade': 'grade',
      },
      ExpressionAttributeValues: {
        ':name': studentData.name,
        ':lastName': studentData.lastName,
        ':age': studentData.age,
        ':grade': studentData.grade,
      },
      UpdateExpression: 'SET #name = :name, #lastName = :lastName, #age = :age, #grade = :grade',
      ReturnValues: 'ALL_NEW',
    };

    try {
      const data = await dynamoDB.update(params).promise();
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Student updated successfully', data }),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal Server Error' }),
      };
    }
  }

  @Delete('{id}')
  @Tags('Students')
  public async deleteStudent(@Path() id: string): Promise<any> {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    const params = {
      TableName: 'Students',
      Key: {
        id
      },
    };

    try {
      await dynamoDB.delete(params).promise();
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Student deleted successfully' }),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal Server Error' }),
      };
    }
  }
}
import AWS from 'aws-sdk';

interface Event {
  pathParameters: {
    id: string;
  };
  body: string;
}

interface StudentData {
  name: string;
  lastName: string;
  age: number;
  grade: number;
}

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const updateStudent = async (event: Event): Promise<any> => {
  const { id } = event.pathParameters;
  const studentData: StudentData = JSON.parse(event.body);

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
};

export { updateStudent };
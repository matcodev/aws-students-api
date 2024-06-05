import AWS from 'aws-sdk';

interface Event {
  pathParameters: {
    id: string;
  };
}

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const deleteStudent = async (event: Event): Promise<any> => {
  const { id } = event.pathParameters;

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
};

export { deleteStudent };
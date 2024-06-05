import AWS from 'aws-sdk';

const dynamo = new AWS.DynamoDB.DocumentClient();

const getStudents = async (event: any): Promise<any> => {
  const params = {
    TableName: 'Students',
  };

  try {
    const data = await dynamo.scan(params).promise();
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
};

export { getStudents };
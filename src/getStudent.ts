import AWS from 'aws-sdk';

interface Event {
  pathParameters: {
    id: string;
  };
}

const getStudent = async (event: Event): Promise<any> => {
  try {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    const { id } = event.pathParameters;

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
};

export { getStudent };
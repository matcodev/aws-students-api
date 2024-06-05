import AWS from 'aws-sdk';
import AWSMock from 'aws-sdk-mock';
import { deleteStudent } from '../src/deleteStudent';

AWSMock.setSDKInstance(AWS);

describe('deleteStudent', () => {
  beforeEach(() => {
    AWSMock.mock('DynamoDB.DocumentClient', 'delete', (params, callback) => {
      callback(null, 'successfully deleted item');
    });
  });

  afterEach(() => {
    AWSMock.restore('DynamoDB.DocumentClient');
  });

  it('should delete a student', async () => {
    const event = {
      pathParameters: {
        id: '1',
      },
    };

    const response = await deleteStudent(event);
    expect(response).toHaveProperty('statusCode', 200);
    expect(JSON.parse(response.body)).toEqual({ message: 'Student deleted successfully' });
  });
});
import { getStudent } from '../src/getStudent';
import AWS from 'aws-sdk';
import AWSMock from 'aws-sdk-mock';

AWSMock.setSDKInstance(AWS);

describe('getStudent', () => {
  beforeEach(() => {
    AWSMock.mock('DynamoDB.DocumentClient', 'get', (params, callback) => {
      callback(null, { Item: { id: '1', name: 'John', lastName: 'Doe', age: '20', grade: 'A' } });
    });
  });

  afterEach(() => {
    AWSMock.restore('DynamoDB.DocumentClient');
  });

  it('should get a student', async () => {
    const event = {
      pathParameters: {
        id: '1',
      },
    };

    const response = await getStudent(event);
    expect(response).toHaveProperty('statusCode', 200);
    expect(JSON.parse(response.body)).toEqual({ id: '1', name: 'John', lastName: 'Doe', age: '20', grade: 'A' });
  });
});
import { addStudent } from '../src/addStudent';
import AWS from 'aws-sdk';
import AWSMock from 'aws-sdk-mock';

AWSMock.setSDKInstance(AWS);

describe('addStudent', () => {
  beforeEach(() => {
    AWSMock.mock('DynamoDB.DocumentClient', 'put', (params, callback) => {
      callback(null, 'successfully put item');
    });
  });

  afterEach(() => {
    AWSMock.restore('DynamoDB.DocumentClient');
  });

  it('should add a student', async () => {
    const event = {
      body: JSON.stringify({
        name: 'John',
        lastName: 'Doe',
        age: '20',
        grade: 'A',
      }),
    };

    const response = await addStudent(event);
    expect(response).toHaveProperty('statusCode', 200);
  });
});
import fetchUser from '../fetch-user';
import axios from 'axios';

jest.mock('axios');

describe('Fetch user', () => {
  it('should fetch user by id', () => {
    expect.assertions(1);

    const userId = 1;
    const response = {
      data: {
        id: userId,
        username: 'Mango',
        email: 'mango@mail.com',
      },
    };
    const result = {
      id: userId,
      name: 'Mango',
      email: 'mango@mail.com',
    };

    axios.get.mockResolvedValue(response);

    return fetchUser(userId)
      .then(user => expect(user).toEqual(result))
      .catch(error => expect(error).not.toBeNull());
  });
});

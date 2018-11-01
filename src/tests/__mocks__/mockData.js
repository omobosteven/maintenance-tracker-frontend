const mockData = {
  signUpData: {
    username: 'blaze',
    email: 'blaze@gmail.com',
    password: 'password',
    password_confirmation: 'password'
  },

  loginData: {
    email: 'blaze@gmail.com',
    password: 'password',
  },

  signUpDataError: {
    username: '',
    email: 'blaze@gmail.com',
    password: 'password',
    password_confirmation: 'password'
  },

  error: {
    username: 'The username field  is a required.'
  },

  requestError: {
    message: 'This request already exist'
  },

  createRequestData: {
    type: '1',
    category: 'computers',
    item: 'laptop',
    description: 'The screen is broken'
  },

  requests: [
    {
      requestId: 11,
      userId: 28,
      ref_no: 100010,
      typeId: 1,
      category: 'electronics',
      item: 'monitor',
      description: 'the screen is bad',
      statusId: 1,
      createdAt: '2018-10-30T17:47:20.463Z',
    }
  ],

  request: {
    requestId: 11,
    userId: 28,
    ref_no: 100010,
    typeId: 1,
    category: 'electronics',
    item: 'monitor',
    description: 'the screen is bad',
    statusId: 1,
    createdAt: '2018-10-30T17:47:20.463Z',
  },

  authResponse: {
    message: 'Welcome user',
    data: {
      data: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3'
      }
    }
  }
};

export default mockData;

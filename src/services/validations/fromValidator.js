export const regex = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
};

export const validatorSchema = {
  email: {
    required: true,
    validator: {
      func: (value) => !regex.email.test(value),
      error: ['', 'email format is not valid'],
    },
  },
  password: {
    required: true,
  },
  user: {
    required: true,
  },
  title: {
    required: true,
  },
  description: {
    required: true,
  },
  body: {
    required: true,
  },
};

export const mongooseErrorHandler = (error) => {
  if (error.errors) var errorMessage = Object.values(error.errors)[0].message;
  return errorMessage || error.message;
};

export const errorHandler = (error) => error?.response?.data || error.message;

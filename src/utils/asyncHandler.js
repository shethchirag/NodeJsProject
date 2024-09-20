export const asyncHandler = (FN) => {
  return (req, res, next) => {
    Promise.resolve(FN(req, res, next)).catch((err) => next(err));
  };
};

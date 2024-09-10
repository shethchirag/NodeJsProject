// const asyncHandler = (FN) => async (req, res, next) => {
//   try {
//     await FN(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

const asyncHandler = (FN) => {
  (req, res, next) => {
    Promise.resolve(FN(req, res, next)).catch((err) => {
      next(err);
    });
  };
};
export { asyncHandler };

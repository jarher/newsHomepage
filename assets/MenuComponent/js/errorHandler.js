export const catchErrors = (evaluator) => {
  try {
    evaluator();
  } catch (error) {
    console.error(error.message);
  }
};

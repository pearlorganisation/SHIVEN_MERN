// multerUploadInsuranceCategories -- handling the media upload for the insurance categories
export const multerUploadInsuranceCategories = (req, res, next) => {
  try {
    
  } catch (error) {
    console.log(error.message);
    return next(
      new CustomError(`Internal Server Error! ${error.message}`, 500)
    );
  }
};

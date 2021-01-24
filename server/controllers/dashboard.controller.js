exports.getDashboard = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Yay ! You made it !",
  });
};

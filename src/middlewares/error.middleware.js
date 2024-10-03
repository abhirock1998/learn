module.exports = async (req, res) => {
  console.log("Error Middleware");
  console.log(req.url, req.body);
  res.status(404).json({ message: "Not Found" });
};

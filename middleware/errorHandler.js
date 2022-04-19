exports.tryForErrors = function (contr) {
  return function (req, res, next) {
    Promise
      .resolve(contr(req, res, next))
      .catch(next);
  }
}

exports.handleAllErrors = function (err, req, res, next) {
  console.error('********************************', err);
  res.status(500).json({ errMsg: "something went wrong!" });
}
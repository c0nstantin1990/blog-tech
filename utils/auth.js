const withAuth = (req, res, next) => {
  if (req.session.user_id) {
    next(); // User is authenticated, proceed to the next middleware or route handler
  } else {
    res.redirect("/login"); // User is not authenticated, redirect to the login page
  }
};

module.exports = withAuth;

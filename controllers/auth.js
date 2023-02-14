exports.isAuth = (req, res, next) => {

    let user = true; // req.profile && req.auth && req.profile._id == req.auth.id

    if (!user) {
        return res.status(403).json({
            error: "Access denied"
        })
    }
    next();
}
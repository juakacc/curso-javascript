const passport = require("passport");
const jwt = require("jsonwebtoken");
const passportJWT = require("passport-jwt");
const mongoose = require("mongoose");

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "minhaChaveSecreta",
};

module.exports = {
  get auth() {
    const User = mongoose.models.Usuario;

    var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
      User.findById(jwt_payload._id)
        .exec()
        .then(user => {
          if (user) {
            next(null, user);
          } else {
            next(null, false);
          }
        });
    });
    passport.use(strategy);
    return {
      initialize: function () {
        return passport.initialize();
      },
      get authenticate() {
        return passport.authenticate("jwt", {session: false});
      },
    };
  },
  login: function (name, password, callback) {
    const User = mongoose.models.Usuario;

    User.findOne({name, password})
      .exec()
      .then(user => {
        if (user) {
          const payload = {_id: user._id};
          const token = jwt.sign(payload, jwtOptions.secretOrKey);
          callback({message: "ok", token});
        } else {
          callback(false);
        }
      });
  },
};

const passport = require("passport");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStractegy = require("passport-local");
// const keys = require("./keys");

const User = require("../models/user");
const config = require("../config");

const localOptions = {
  usernameField: "email",
};

const localStrategy = new LocalStractegy(localOptions, function (
  email,
  password,
  done
) {
  User.findOne({ email: email }, function (error, user) {
    if (error) {
      return done(error);
    }
    if (!user) {
      return done(null, false);
    }
    user.comparePassword(password, function (error, isMatch) {
      if (error) {
        return done(error);
      }
      if (!isMatch) {
        return done(null, false);
      }
      return done(null, user);
    });
  });
});

const jwtOptions = {
  secret: config.secret,
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
};

const jwtStrategy = new JwtStrategy(jwtOptions, function (payload, done) {
  User.findById(payload.sub, function (error, user) {
    if (error) {
      return done(error, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(localStrategy);

passport.use(jwtStrategy);

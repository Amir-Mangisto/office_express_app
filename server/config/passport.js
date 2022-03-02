const jwtStrategy = require("passport-jwt").Strategy; //this is how to read the encoded token
const ExtractJwt = require("passport-jwt").ExtractJwt; //this is how to parse the code לפענח
const users = require("../model/user-model");
//this tells in which way to understand the encoded token

const options = {
  secretOrKey: process.env.SECRET_KEY,
};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //taking the token from the request using ExtractJwt module

//middleWear function
// gets passport ass parameter ,inside we using use function that get instance and inside of it get 2 args 1.is obj options
// and callback the callback gets 2 args payload in our case (user), and done func .
module.exports = (passport) => {
  passport.use(new jwtStrategy(options, (jwt_payload, done) => {  
      users.findById( jwt_payload._doc._id ) 
        .then((user) => {
          if (user) return done(null, user); //if theres a user with all the values with no issues he gets the user
          done(null, false); //else return null with false example for that is an empty object.
        })
        .catch((err) => done(err, false));
    })
  )
};

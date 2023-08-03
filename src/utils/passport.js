const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

	secretOrKey: "rstore",
};
passport.use(
	new JwtStrategy(options, async (payload, done) => {
		done(null, payload);
	})
);

module.exports = passport;

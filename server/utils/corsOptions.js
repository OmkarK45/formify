//  @TODO -[Security] Change this to frontend later
const corsOptions = {
  origin: ["http://localhost:3000", "https://formify-beta.netlify.app"],
  optionsSuccessStatus: 200,
  credentials: true,
}
module.exports = corsOptions

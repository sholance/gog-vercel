const { mainrouter } = require('./routes/main');


module.exports = (app) => {
  app.use(mainrouter);

//   app.use('/user', authrouter);


};
homeController = (req, res) => {
    res.render('index', {
        title: "Home Page"
    })
  };

mapController = (req, res) => {
  res.render('map', {
    title: "Simulation"
  })
};

mapController2 = (req, res) => {
  res.render('map2', {
    title: "Simulation"
  })
};

reportController = (req, res) => {
  res.render('report', {
    title: "Analysis"
  })
};
  
  
module.exports = { 
  homeController,
  mapController,
  mapController2,
  reportController 
};
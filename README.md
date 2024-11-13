# Assignment 1 (Tour Agency)

## Get started
1. Install Node.js
2. Download/Copy the code in `Lawrence_touragency.js`
3. Add it into an empty folder or file


## Intructions
1. Create a touragency.js into the folder
2. Add `"const agency = require('./[filename].js');"` at the top of the file
3. Tryout the functions by inputing the code below:
```ruby
module.exports.addTour("Tokyo Trip","Japan","800","3 days","Description");
module.exports.getAllTour();
module.exports.findTourByName("Tokyo Trip");
module.exports.findToursByDestination("Japan");
module.exports.updateTourDescription("Description 2");
module.exports.bookTour("Tokyo Trip", 2);
module.exports.deleteTourByName("Tokyo Trip");
```

# Functions
* addTour(name, destination, budget, duration, description) `To add Tour Packages`
* getAllTour() `To get all Tour Packages`
* findTourByName(name) `To find Tour by name`
* findToursByDestination(destination) `To find Tour by destination`
* updateTourDescription(tourName, updatedDescription) `To update Tour's Description`
* bookTour(tourName, qty) `To book Tour and find out the total price`
* deleteTourByName(name) `To delete Tour by name`

let database = [];

module.exports = {
    // Function to add a tour to the agency
    addTour(name, destination, budget, duration, description) {
        // Ensures the tour name is a valid input
        if (typeof name !== 'string' || name.trim() === "") {
            console.log("Invalid tour name. Tour name must be a string.");
            return;
        }
        
        // Check if a tours with the same name already exists
        const existingTour = database.find(tour => tour.name === name);
        if (existingTour) {
            console.log(`Tour '${name}' already exists in the database.`);
            return;
        }
        
        database.push({
            name: name,
            destination: destination,
            budget: budget,
            duration: duration,
            description: description
        });
        console.log(`Tour '${name}' added successfully!`);
    },

    // Function to display all tours
    getAllTour() {
        console.log("Tours available right now:");
        database.forEach(tour => {
            console.log(`Name: ${tour.name}, Destination: ${tour.destination}, Budget: ${tour.budget}, Duration: ${tour.duration}, Description: ${tour.description}`);
        });
    },

    // Function to find a specific tour by name
    findTourByName(name) {
        // Find the tour with the specified name
        const tour = database.find(tour => tour.name === name);
        
        if (tour) {
            console.log(`Tour found: Name: ${tour.name}, Destination: ${tour.destination}, Budget: ${tour.budget}, Duration: ${tour.duration}, Description: ${tour.description}`);
        } else {
            console.log(`Tour with the name '${name}' does not exist.`);
        }
    },
    // Function to find all tours with a specific destination
    findToursByDestination(destination) {
    const tours = database.filter(tour => tour.destination === destination);
    
        if (tours.length > 0) {
            console.log(`Tours found with destination '${destination}':`);
            tours.forEach(tour => {
                console.log(`Name: ${tour.name}, Destination: ${tour.destination}, Budget: ${tour.budget}, Duration: ${tour.duration}, Description: ${tour.description}`);
            });
        } else {
            console.log(`No tours with the destination '${destination}' found.`);
        }
        
    },

    // Function to update Tour discription
    updateTourDescription(tourName, updatedDescription) {
    
        const index = database.findIndex(tour => tour.name === tourName);
        
    
        if (index === 0) {
            console.log(`Tour '${tourName}' not found in the database.`);
            return;
        }

        // This line merges database[index] and updatedDetails
        const updatedTour = { ...database[index], ...updatedDescription };
        database[index] = updatedTour;
        
        console.log(`Tour '${tourName}' details updated successfully!`);
        console.log(`Updated ${tourName}'s description to "${updatedDescription}"`);
    },
    // Function to delete tour by name
    deleteTourByName(name) {
        database = database.filter(tour => tour.name !== name);
        console.log(`Tour '${name}' deleted successfully!`);
    },
    // Function to book tour package + display total cost
    bookTour(tourName, qty) {

    const tour = database.find(tour => tour.name === tourName);
    if (!tour) {
        console.log(`Tour '${tourName}' not found.`);
        return;
    }

    const tourCost = tour.budget;
    const total = tourCost * qty;

    console.log(`You have purchased `+ qty  +` tour package for `+ tourName)
    console.log(`The total amount would be $${total}`);
    },

};
console.log("------------------------------------------------------------------");
//added 3 Tour packages to the database
module.exports.addTour("Kyoto Trip", "Japan", "800", "3 days", "Experience Kyoto's iconic sights, cuisine, and culture in three unforgettable days.");
module.exports.addTour("Tokyo Trip", "Japan", "1000", "5 days", "Experience Tokyo's iconic sights, cuisine, and culture in five unforgettable days.");
module.exports.addTour("Penang Trip", "Malaysia", "500", "4 days", "Experience Penang's iconic sights, cuisine, and culture in four unforgettable days.");
module.exports.addTour("");
console.log("------------------------------------------------------------------");
module.exports.getAllTour(); // Display all the Tour that is available
console.log("------------------------------------------------------------------");
module.exports.findTourByName("Tokyo Trip"); // Display the details of the Tokyo Trip tour
module.exports.findTourByName("Paris Trip"); // Display that the tour does not exist
console.log("------------------------------------------------------------------");
module.exports.findToursByDestination("Japan");   // Display all Tours to Japan
module.exports.findToursByDestination("Malaysia") // Display all Tours to Malaysia
module.exports.findToursByDestination("France");  // Display Tour to France does not exist
console.log("------------------------------------------------------------------");
module.exports.updateTourDescription("Tokyo Trip","Come to Tokyo and enjoy the amazing food here"); //Display Updated Description for the Tour
console.log("------------------------------------------------------------------");
module.exports.deleteTourByName("Kyoto Trip"); // Deletes Kyoto Trip Tour
console.log("------------------------------------------------------------------");
module.exports.bookTour("Tokyo Trip", 2);  // Display quantity of tour packages purchased and the total cost
console.log("------------------------------------------------------------------");

const totalPassengers = 1234;
const passengersToday = 56;
const topDestinations = [
	{ name: 'New York', count: 200 },
	{ name: 'Los Angeles', count: 150 },
	{ name: 'Chicago', count: 120 },
];

document.getElementById('total-passengers').textContent = totalPassengers;
document.getElementById('passengers-today').textContent = passengersToday;

const topDestinationsList = document.getElementById('top-destinations');
topDestinations.forEach(destination => {
	const li = document.createElement('li');
	li.textContent = `${destination.name} (${destination.count})`;
	topDestinationsList.appendChild(li);
});
const buses = [
  { id: 1, from: "City A", to: "City B", time: "10:00 AM", price: 20 },
  { id: 2, from: "City A", to: "City B", time: "2:00 PM", price: 25 },
  { id: 3, from: "City B", to: "City A", time: "4:00 PM", price: 22 }
];

document.getElementById("searchForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const date = document.getElementById("date").value;

  const results = buses.filter(bus =>
    bus.from.toLowerCase() === from.toLowerCase() &&
    bus.to.toLowerCase() === to.toLowerCase()
  );

  displayBuses(results, date);
});

function displayBuses(results, date) {
  const container = document.getElementById("busResults");
  container.innerHTML = "";

  if (results.length === 0) {
    container.innerHTML = "<p>No buses found.</p>";
    return;
  }

  results.forEach(bus => {
    const div = document.createElement("div");
    div.className = "bus-card";
    div.innerHTML = `
      <p><strong>From:</strong> ${bus.from}</p>
      <p><strong>To:</strong> ${bus.to}</p>
      <p><strong>Time:</strong> ${bus.time}</p>
      <p><strong>Price:</strong> $${bus.price}</p>
      <button onclick="bookTicket('${bus.from}', '${bus.to}', '${bus.time}', ${bus.price}, '${date}')">Book Now</button>
    `;
    container.appendChild(div);
  });
}

function bookTicket(from, to, time, price, date) {
  alert(`Ticket booked!\n\nFrom: ${from}\nTo: ${to}\nDate: ${date}\nTime: ${time}\nPrice: $${price}`);
}

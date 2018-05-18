export async function fetchFlights({departDate, returnDate, from, to}) {
    const url = "https://warsawjs-flights-api.herokuapp.com/flights"
    const result = await fetch(`${url}/${departDate}/${returnDate}/${from}/${to}`)
    const flights = await result.json()

    return flights
}
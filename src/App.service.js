export async function fetchAirports() {
    const res = await fetch('https://warsawjs-flights-api.herokuapp.com/airports')
    const airports = await res.json()

    return airports
}
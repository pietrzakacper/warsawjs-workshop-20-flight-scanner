# WarsawJS Workshop 20 Flight Scanner

### 0. Setup
1. Tworzymy aplikację poprzez `npx create-react-app warsawjs-workshop-20-flights-search`
2. Odpalamy ją za pomocą `npm start`
3. Usuńmy zawartość katalogu src/

### 1. 	Mainframe
1. Stworzyć główny komponent `<App />`, który wyświetla „Hello World” w `App.js`
```javascript
import React from "react";

export default class App extends React.Component {
	render() {
		return (
			<h1>Hello World!</h1>
		);
	}
}
```

2. Wyrenderować `<App />` za pomocą react-dom (`ReactDOM.render(<App />, document.getElementById("root")`)
3. Dodać bazowe cssy (`import "./index.css"`)

### 2. Widok wyszukiwania
1. Stworzyć komponent `<SearchView />` w pliku `SearchView.js`
2. Dodać w nim znacznik `form`
3. Dodać dwa znaczniki `select`:  [From, To] z opcjami `WAW, JFk`
4. Dodać dwa znaczniki `input[type="date"]` Data wylotu, Data powrotu
5. Podpiąć pod nie metody zmieniające `state` na eventy onChange
```javascript
class SearchView extends React.Component {
	onToChange = (e) => this.setState({ to: e.target.value })
	render() {
    	return (
			<form>
				<input onChange={this.onToChange} />
			</form>
		)
    }
}
```
6. Ustalić wartość `inputów` na wartości ze `state`
```javascript
<input onChange={this.onToChange} value={this.state.to} />
```
7. Dodać `onSubmit` do `form` (zwykły `console.log` state'a)
 	7.1 Dodać prostą walidację pół (czy są wszystkie wypełnione)
	7.2. Ważne, aby pamiętać o zablokowaniu domyślnego zachowania formularza – `evt.preventDefault()`

### 3. Widok wyników
1. Stworzyć kolejny component `<FlightsView />`
2. W `<App />` renderować komponent w zależności od wartości state'u (`view === "search"` czy `view === "flights"`)
3. Dodać zmianę state'a w `<App />` (przekazanie metody jako prop do `<SearchView />`; zmiana `state.view` oraz `state.searchData`)
4. Zrobić zapytanie do api (`https://warsawjs-flights-api.herokuapp.com/flights/:outboundDate/:inboundDate/:outboundAirport/:inboundAirport`) za pomocą `fetch` w `componentDidMount` i zapisać je do state'a
5. Wyświetlić dane w prosty sposób np.
```javascript
render() {
	return this.state.flights.map( flight => (<p>Price: ${flight.price}</p>);
}
```
6. Stworzyć komponent `<Flight />`, który będzie wyświetlał: godzinę odlotu, godzinę przylotu, cenę lotu, lotnisko startowe, lotnisko końcowe, ilość przesiadek

### 4. CSS
1. `npm run eject`
2. https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2#2f06
3. Zaimportowanie styli (`import styles from "./Flights.css"`)
4. Ostylowanie przy użyciu css (przykład: `https://github.com/...`), rozbijanie na mniejsze komponenty

### 5. Dodanie filtrowania
1. Stworzyć komponent `<FlightsFilter />`
2. Dodać 2 `input[type="number]` – jeden dla minimalnej ceny, drugi dla maksymalnej
3. Stworzyć `refy`
```javascript
export default class FlightsFilter extends React.Component {
	constructor() {
		super();
		this.priceMin = React.createRef();

		//...
	}
	// ...

	render() {
		return (<input type="number" ref={this.priceMin} />);
	}
}
```
4. Filtrowanie lotów – podanie jako prop metody `filterFlights` do `<FlightsFilter />`, która przy wykonaniu filtruje loty i przypisuje je do state'u `<FlightsView />`
5. Stworzyć metodę, która będzie tworzyła filtr ceny
6. Dodać wywołanie tej metody na `onChange` inputa
7. Dodać `input[type="checkbox]` i stworzyć dla niego `ref`
8. Dodać filtrowanie tylko jeśli checkbox jest zaznaczony

## Dla chętnych
- [x] Pobieranie lotnisk z api
- [ ] Wyświetlanie linii lotniczych (pobranie ich z api)
- [ ] Filtrowanie po innych wartościach
- [x] Wyświetlanie (ilości) przesiadek
- [ ] Sortowanie (po cenie, długości podróży)
- [x] Ustawianie wartości pól w `<SeachView />` po powrocie do tego widoku

## Źródła
- API: https://warsawjs-flights-api.herokuapp.com/
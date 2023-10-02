class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/'
	_apiKey = 'apikey=d6572b052b61cd7ef4723c6130190177'

	getResourse = async (url) => {
		let res = await fetch(url)

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`)
		}

		return await res.json()
	}

	getAllCharacters = async () => {
		const res = await this.getResourse(
			`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`
		)
		return res.data.results.map(this._transformCharacter)
	}

	getCharacter = async (id) => {
		const res = await this.getResourse(
			`${this._apiBase}/characters/${id}?${this._apiKey}`
		)
		return this._transformCharacter(res.data.results[0])
	}

	_transformCharacter = (char) => {
		const descr = (str, num) => {
			if (str) return str.slice(0, num) + '...'
			else return 'There is no description'
		}

		return {
			name: char.name,
			description: descr(char.description, 150),
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
		}
	}
}

export default MarvelService

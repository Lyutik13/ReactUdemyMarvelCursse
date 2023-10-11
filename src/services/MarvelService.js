class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/'
	_apiKey = 'apikey=3596d553cbdbbaff9b7445aca8a41242'

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
      id: char.id,
			name: char.name,
			description: descr(char.description, 150),
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
      comics: char.comics.items,
		}
	}
}

export default MarvelService

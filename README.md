# American / British English Translator

A full-stack JavaScript application that translates common spelling, terms, titles, and time formats between American and British English.

Created and maintained by **Dieu-Merci Ndenga**.

## Features

- American-to-British and British-to-American translation
- Highlighted translated words and phrases
- Title and honorific conversion, such as `Dr.` and `Dr`
- Time conversion, such as `12:15` and `12.15`
- JSON API with validation errors
- Unit and functional test coverage

## Requirements

- Node.js 18 or newer
- npm

## Local Setup

```bash
npm install
cp sample.env .env
npm start
```

The application runs at `http://localhost:3000` by default. Set `PORT` in `.env` to use another port.

## API

Send a `POST` request to `/api/translate` with this JSON body:

```json
{
	"text": "Mangoes are my favorite fruit.",
	"locale": "american-to-british"
}
```

Supported locale values are `american-to-british` and `british-to-american`.

## Tests

```bash
npm test
```

The project currently includes 24 unit tests and 6 functional tests.

## Project Attribution

This project was developed by Dieu-Merci Ndenga as an implementation of the American/British English Translator challenge from [freeCodeCamp](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator). The challenge specification and its original supporting materials remain attributed to their respective owners.
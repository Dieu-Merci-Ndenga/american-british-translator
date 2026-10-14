'use strict';

const translator = require('../components/translator.js');

module.exports = function (app) {

  app.route('/api/translate')
    .post((req, res) => {
      const {locale, text} = req.body;

      if (!locale || text === undefined || text === null) {
        return res.json({error: 'Required field(s) missing'});
      }

      if (text === "") return res.json({error: 'No text to translate'});

      if (locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({error: 'Invalid value for locale field'});
      }

      const translated = translator(text, locale);
      if (!translated || text === translated[0]) {
        return res.json({text, translation: 'Everything looks good to me!'});
      }

      return res.json({text, translation: translated[1]});
    });
};
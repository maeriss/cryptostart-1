import express from 'express'
const router = new express.Router()

const apiBaseUrl = 'https://pro-api.coinmarketcap.com/v1'

// Fonction réutilisable pour faire des appels à l'API CMC
function fetchCMC (path) {
  const apiKey = process.env.CMC_API_KEY

  return fetch(`${apiBaseUrl}${path}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cmc_pro_api_key': apiKey
    }
  })
    .then(fetchResponse => {
      return fetchResponse.json()
    })
    .then(responseData => {
      const errorCode = responseData.status.error_code
      if (errorCode !== 0) {
        throw new Error(responseData.status.error_message)
      }
      return responseData.data
    })
}

// route: /api/v1/currencies/
router.get('/', function getRoot (req, res) {
  const path = '/cryptocurrency/listings/latest'

  fetchCMC(path)
    .then(currencies => {
      res.status(200).json({
        success: true,
        currencies: currencies.map(currency => ({
          id: currency.id,
          name: currency.name,
          slug: currency.slug,
          quote: currency.quote
        }))
      })
    })
    .catch(error => {
      res.json({
        success: false,
        message: error.message
      })
    })
})

// route: /api/v1/currencies/:currencyslug
router.get('/:currencyslug', function getRoot (req, res) {
  const crypto = req.params.currencyslug
  // const crypto = currencyslug

  const path = '/cryptocurrency/info?slug=' + crypto

  fetchCMC(path)
    .then(crypto => {
      res.status(200).json({
        success: true,
        crypto
        /* id: crypto.id,
            name: crypto.name,
            slug: crypto.slug,
            quote: crypto.quote,
            logo: crypto.logo,
            description : crypto.description */
      })
    })
    .catch(error => {
      res.status(400).json({
        success: false,
        message: error.message
      })
    })
})

export { router as currenciesRoutes }

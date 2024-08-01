// const fetch = require('node-fetch') // Make sure you have node-fetch installed
import fetch from 'node-fetch'

async function getLocationIdsForCountries (countries) {
  const url = 'https://api.inaturalist.org/v1/places/autocomplete'
  const locationIds = {}

  for (const country of countries) {
    try {
      const response = await fetch(`${url}?q=${country}&per_page=1`)
      if (response.ok) {
        const data = await response.json()
        if (data.results.length > 0) {
          locationIds[country] = data.results[0].id
        } else {
          console.log(`No results for ${country}`)
        }
      } else {
        console.error(
          `Failed to fetch data for ${country}: ${response.statusText}`
        )
      }
    } catch (error) {
      console.error(`Error fetching data for ${country}: ${error.message}`)
    }
  }

  return locationIds
}

const asianCountries = [
  'Afghanistan',
  'Armenia',
  'Azerbaijan',
  'Bahrain',
  'Bangladesh',
  'Bhutan',
  'Brunei',
  'Cambodia',
  'China',
  'Cyprus',
  'Georgia',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Israel',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Lebanon',
  'Malaysia',
  'Maldives',
  'Mongolia',
  'Myanmar',
  'Nepal',
  'North Korea',
  'Oman',
  'Pakistan',
  'Palestine',
  'Philippines',
  'Qatar',
  'Saudi Arabia',
  'Singapore',
  'South Korea',
  'Sri Lanka',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Thailand',
  'Timor-Leste',
  'Turkey',
  'Turkmenistan',
  'United Arab Emirates',
  'Uzbekistan',
  'Vietnam',
  'Yemen'
]

const fetchedIDs = [
  7341, 8433, 8434, 10284, 7154, 7707, 7838, 7002, 6903, 96773, 7985, 6681,
  6966, 6818, 8206, 6815, 6737, 7833, 7342, 7355, 7346, 7001, 10299, 7155, 8425,
  7347, 6992, 7335, 8432, 7356, 7076, 9753, 6873, 7357, 7358, 6734, 6891, 7077,
  8207, 7887, 8435, 6967, 7183, 7351, 7359, 7352, 6847, 7837
]

async function getLocationForIds (ids) {
  const url = 'https://api.inaturalist.org/v1/places/'
  const locationIds = {}

  for (const id of ids) {
    try {
      const response = await fetch(`${url}?q=${id}`)
      if (response.ok) {
        const data = await response.json()
        if (data.results.length > 0) {
          locationIds[
            id
          ] = `${data.results[0].id} ${data.results[0].display_name} ${data.results[0].name} ${data.results[0].slug}; `
        } else {
          console.log(`No results for ${country}`)
        }
      } else {
        console.error(
          `Failed to fetch data for ${country}: ${response.statusText}`
        )
      }
    } catch (error) {
      console.error(`Error fetching data for ${country}: ${error.message}`)
    }
  }

  return locationIds
}

// getLocationIdsForCountries(asianCountries)
//   .then(locationIds => {
//     console.log('Location IDs for Asian countries:', locationIds)
//   })
//   .catch(error => {
//     console.error('Error fetching location IDs:', error)
//   })

getLocationForIds(ids‘)
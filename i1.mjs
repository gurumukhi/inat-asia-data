import fetch from 'node-fetch'

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

async function getObservationCounts (locationIds) {
  const observationsAPI =
    'https://api.inaturalist.org/v1/observations?verifiable=true&order_by=observations.id&order=desc&page=1&spam=false&d1=2023-07-01&d2=2024-06-30&locale=en&preferred_place_id=6681&per_page=0&return_bounds=true&' // &place_id=97394
  const speciesAPI =
    'https://api.inaturalist.org/v1/observations/species_counts?verifiable=true&spam=false&d1=2023-07-01&d2=2024-06-30&locale=en&preferred_place_id=6681&per_page=0&' // &place_id=97394
  const identifiersAPI =
    'https://api.inaturalist.org/v1/observations/identifiers?verifiable=true&spam=false&d1=2023-07-01&d2=2024-06-30&locale=en&preferred_place_id=6681&per_page=0&' // &place_id=97394
  const observersAPI =
    'https://api.inaturalist.org/v1/observations/observers?verifiable=true&spam=false&d1=2023-07-01&d2=2024-06-30&locale=en&preferred_place_id=6681&per_page=0&' // &place_id=97394

  const inatApiUrl =
    'https://api.inaturalist.org/v2/observations?observed_on=2024-04-26&page=1&per_page=1&'

  ///////
  const observations = {}

  // const observations = {}
  // const species = {}
  // const identifiers = {}
  // const observers = {}

  // console.log()

  //1
  for (const [country, placeId] of Object.entries(locationIds)) {
    if (observations[country]['observations'] == null) {
      console.log('getting observations for ', country)

      // observations[country] = {}
      // observations[country]['location_id'] = placeId

      // console.log(country, placeId)
      // console.log('Output observations = ', observations)
      let tmpUrl = `${observationsAPI}place_id=${placeId}`
      // console.log(tmpUrl)
      try {
        const response = await fetch(tmpUrl)
        if (response.ok) {
          const data = await response.json()
          observations[country]['observations'] = data.total_results
        } else {
          console.error(
            `Failed to fetch observations for ${country}: ${response.statusText}`
          )
        }
      } catch (error) {
        console.error(
          `Error fetching observations for ${country}: ${error.message}`
        )
      }
      await new Promise(resolve => setTimeout(resolve, 10)) // Sleep for 1 second between requests
    }
  }

  //2
  for (const [country, placeId] of Object.entries(locationIds)) {
    if (observations[country]['species'] == null) {
      console.log('getting species for ', country)
      let tmpUrl = `${speciesAPI}place_id=${placeId}`
      try {
        const response = await fetch(tmpUrl)
        if (response.ok) {
          const data = await response.json()
          // species[country] = data.total_results
          observations[country]['species'] = data.total_results
        } else {
          console.error(
            `Failed to fetch species for ${country}: ${response.statusText}`
          )
        }
      } catch (error) {
        console.error(`Error fetching species for ${country}: ${error.message}`)
      }
      await new Promise(resolve => setTimeout(resolve, 10)) // Sleep for 1 second between requests
    }
  }

  //3
  for (const [country, placeId] of Object.entries(locationIds)) {
    if (observations[country]['identifiers'] == null) {
      console.log('getting identifiers for ', country)
      let tmpUrl = `${identifiersAPI}place_id=${placeId}`
      try {
        const response = await fetch(tmpUrl)
        if (response.ok) {
          const data = await response.json()
          // identifiers[country] = data.total_results
          observations[country]['identifiers'] = data.total_results
        } else {
          console.error(
            `Failed to fetch identifiers for ${country}: ${response.statusText}`
          )
        }
      } catch (error) {
        console.error(
          `Error fetching identifiers for ${country}: ${error.message}`
        )
      }
      await new Promise(resolve => setTimeout(resolve, 10)) // Sleep for 1 second between requests
    }
  }

  //4
  for (const [country, placeId] of Object.entries(locationIds)) {
    if (observations[country]['observers'] == null) {
      console.log('getting observers for ', country)
      let tmpUrl = `${observersAPI}place_id=${placeId}`
      try {
        const response = await fetch(tmpUrl)
        if (response.ok) {
          const data = await response.json()
          // observers[country] = data.total_results
          observations[country]['observers'] = data.total_results
        } else {
          console.error(
            `Failed to fetch observers for ${country}: ${response.statusText}`
          )
        }
      } catch (error) {
        console.error(
          `Error fetching observers for ${country}: ${error.message}`
        )
      }
      await new Promise(resolve => setTimeout(resolve, 10)) // Sleep for 1 second between requests
    }
  }

  // console.log('Observation counts for Asian countries:', observations)
  // console.log('Output observations = ', observations)
  console.log(observations)
  // console.log('Output species = ', species)
  // console.log('Output identifiers = ', identifiers)
  // console.log('Output observers = ', observers)

  return true
}

async function main () {
  try {
    // const locationIds = await getLocationIdsForCountries(asianCountries)
    // console.log('Location IDs for Asian countries:', locationIds)
    let locationIdsFetched = {
      // /*
      Afghanistan: 7341,
      Armenia: 8433,
      Azerbaijan: 8434,
      Bahrain: 10284,
      Bangladesh: 7154,
      Bhutan: 7707,
      Brunei: 7838,
      Cambodia: 7002,
      China: 6903,
      Cyprus: 96773,
      Georgia: 7985,
      India: 6681,
      Indonesia: 6966,
      Iran: 6818,
      Iraq: 8206,
      Israel: 6815,
      Japan: 6737,
      Jordan: 7833,
      Kazakhstan: 7342,
      Kuwait: 7355,
      Kyrgyzstan: 7346,
      Laos: 7001,
      Lebanon: 10299,
      Malaysia: 7155,
      Maldives: 8425,
      Mongolia: 7347,
      Myanmar: 6992,
      Nepal: 7335,
      'North Korea': 8432,
      Oman: 7356,
      Pakistan: 7076,
      Palestine: 9753,
      Philippines: 6873,
      Qatar: 7357,
      'Saudi Arabia': 7358,
      Singapore: 6734,
      'South Korea': 6891,
      'Sri Lanka': 7077,
      Syria: 8207,
      Taiwan: 7887,
      Tajikistan: 8435,
      Thailand: 6967,
      Turkey: 7183,
      Turkmenistan: 7351,
      //  */
      'United Arab Emirates': 7359,
      Uzbekistan: 7352,
      Vietnam: 6847,
      Yemen: 7837
    }

    const observations = await getObservationCounts(locationIdsFetched)
  } catch (error) {
    console.error('Error in main function:', error)
  }
}

main()

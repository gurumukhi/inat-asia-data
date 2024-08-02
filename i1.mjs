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
  const observations = {
    Afghanistan: {
      location_id: 7341,
      observations: 70,
      species: 49,
      identifiers: 17,
      observers: 12
    },
    Armenia: {
      location_id: 8433,
      observations: 14523,
      species: 3018,
      observers: 367,
      identifiers: 1075
    },
    Azerbaijan: {
      location_id: 8434,
      observations: 4145,
      species: 1425,
      identifiers: 588,
      observers: 172
    },
    Bahrain: {
      location_id: 10284,
      observations: 368,
      species: 161,
      identifiers: 95,
      observers: 31
    },
    Bangladesh: {
      location_id: 7154,
      observations: 5233,
      species: 1796,
      identifiers: 646,
      observers: 182
    },
    Bhutan: {
      location_id: 7707,
      observations: 10032,
      species: 2468,
      observers: 173,
      identifiers: 726
    },
    Brunei: {
      location_id: 7838,
      observations: 968,
      species: 550,
      identifiers: 271,
      observers: 55
    },
    Cambodia: {
      location_id: 7002,
      observations: 23912,
      species: 2513,
      identifiers: 870,
      observers: 432
    },
    China: {
      location_id: 6903,
      observations: 385722,
      species: 28270,
      identifiers: 5277,
      observers: 5361
    },
    Cyprus: {
      location_id: 96773,
      observations: 3379,
      species: 1193,
      identifiers: 450,
      observers: 110
    },
    Georgia: {
      location_id: 7985,
      observations: 724,
      species: 155,
      identifiers: 135,
      observers: 49
    },
    India: {
      location_id: 6681,
      observations: 713968,
      species: 21813,
      observers: 11811,
      identifiers: 6926
    },
    Indonesia: {
      location_id: 6966,
      observations: 181747,
      species: 14614,
      identifiers: 3783,
      observers: 4502
    },
    Iran: {
      location_id: 6818,
      observations: 11673,
      species: 2374,
      identifiers: 1050,
      observers: 241
    },
    Iraq: {
      location_id: 8206,
      observations: 2334,
      species: 1191,
      identifiers: 312,
      observers: 66
    },
    Israel: {
      location_id: 6815,
      observations: 65938,
      species: 5914,
      observers: 1285,
      identifiers: 2025
    },
    Japan: {
      location_id: 6737,
      observations: 217500,
      species: 14723,
      identifiers: 3966,
      observers: 6111
    },
    Jordan: {
      location_id: 7833,
      observations: 3266,
      species: 955,
      identifiers: 547,
      observers: 203
    },
    Kazakhstan: {
      location_id: 7342,
      observations: 58000,
      species: 4767,
      identifiers: 1650,
      observers: 1073
    },
    Kuwait: {
      location_id: 7355,
      observations: 2978,
      species: 484,
      identifiers: 380,
      observers: 63
    },
    Kyrgyzstan: {
      location_id: 7346,
      observations: 8603,
      species: 1977,
      identifiers: 768,
      observers: 249
    },
    Laos: {
      location_id: 7001,
      observations: 5301,
      species: 1592,
      identifiers: 623,
      observers: 263
    },
    Lebanon: {
      location_id: 10299,
      observations: 2388,
      species: 1079,
      identifiers: 390,
      observers: 215
    },
    Malaysia: {
      location_id: 7155,
      observations: 181631,
      observers: 3896,
      species: 16276,
      identifiers: 3520
    },
    Maldives: {
      location_id: 8425,
      observations: 12892,
      species: 1523,
      identifiers: 644,
      observers: 260
    },
    Mongolia: {
      location_id: 7347,
      observations: 21432,
      species: 2208,
      identifiers: 714,
      observers: 302
    },
    Myanmar: {
      location_id: 6992,
      observations: 4543,
      observers: 221,
      species: 1876,
      identifiers: 590
    },
    Nepal: {
      location_id: 7335,
      observations: 26719,
      species: 4433,
      identifiers: 1461,
      observers: 834
    },
    'North Korea': {
      location_id: 8432,
      observations: 237,
      species: 183,
      identifiers: 111,
      observers: 23
    },
    Oman: {
      location_id: 7356,
      observations: 3432,
      identifiers: 608,
      observers: 170
    },
    Pakistan: {
      location_id: 7076,
      observations: 8839,
      observers: 288,
      species: 2169,
      identifiers: 869
    },
    Palestine: {
      location_id: 9753,
      observations: 5760,
      species: 1611,
      identifiers: 484,
      observers: 175
    },
    Philippines: {
      location_id: 6873,
      observations: 95710,
      species: 9286,
      identifiers: 2506,
      observers: 3668
    },
    Qatar: {
      location_id: 7357,
      observations: 4358,
      species: 534,
      identifiers: 391
    },
    'Saudi Arabia': {
      location_id: 7358,
      observations: 6433,
      identifiers: 741,
      observers: 326,
      species: 1563
    },
    Singapore: {
      location_id: 6734,
      observations: 145316,
      species: 6750,
      identifiers: 2664
    },
    'South Korea': {
      location_id: 6891,
      observations: 72839,
      species: 6633,
      identifiers: 2129
    },
    'Sri Lanka': {
      location_id: 7077,
      observations: 31758,
      identifiers: 1642,
      observers: 850,
      species: 4546
    },
    Syria: {
      location_id: 8207,
      observations: 6087,
      species: 2114,
      identifiers: 731,
      observers: 35
    },
    Taiwan: {
      location_id: 7887,
      observations: 748418,
      species: 16739,
      identifiers: 5620
    },
    Tajikistan: {
      location_id: 8435,
      observations: 2881,
      identifiers: 373,
      species: 963
    },
    Thailand: {
      location_id: 6967,
      observations: 224812,
      species: 15332,
      observers: 6360,
      identifiers: 4063
    },
    Turkey: {
      location_id: 7183,
      observations: 77745,
      species: 7903,
      identifiers: 3019,
      observers: 3237
    },
    Turkmenistan: {
      location_id: 7351,
      observations: 117,
      species: 60,
      identifiers: 32
    },
    'United Arab Emirates': {
      location_id: 7359,
      observations: 14447,
      identifiers: 1223,
      species: 1998
    },
    Uzbekistan: {
      location_id: 7352,
      observations: 9348,
      species: 1928,
      identifiers: 802
    },
    Vietnam: {
      location_id: 6847,
      observations: 40751,
      observers: 1342,
      species: 5947,
      identifiers: 1838
    },
    Yemen: {
      location_id: 7837,
      observations: 3071,
      species: 825,
      identifiers: 362,
      observers: 30
    }
  }

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

// Create a new instance of the mock adapter attached to your axios instance
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import { GENERAL_MOCK } from './general'
import { LIFE_DATA } from './life'
import { ASSET_DATA } from './assets'

const mock = new AxiosMockAdapter(axios, { delayResponse: 500 }) // optional delay to simulate network

// Define your mocked routes
mock.onGet('/api/general').reply(200, GENERAL_MOCK)

mock.onGet('/api/life').reply(200, LIFE_DATA)

mock.onGet('/api/assets').reply(200, ASSET_DATA)

// Optional: fallback for unhandled requests
mock.onAny().passThrough()

export default mock
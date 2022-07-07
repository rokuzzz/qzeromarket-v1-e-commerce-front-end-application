import {rest} from "msw"
import {setupServer} from "msw/node"

import { addProduct, addProductToApi, fetchAllProducts, sortByCategory, sortByPriceAsc, sortByPriceDesc} from './../../redux/reducers/productReducer';
import createTestStore from "../utils/testStore";
import { products } from "../fixtures/testProduct"

const handler = [
  rest.post('https://api.escuelajs.co/api/v1/products/', (req, res, ctx) => {
    return res(
      ctx.json(
        req.body
      ),
      ctx.delay(150)
    )
  })
]

let store = createTestStore()
const server = setupServer(...handler)

beforeEach(() => {
  store = createTestStore()
  server.listen()
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('test product reducer', () => {
  test('fetch all products from api', async () => {
    await store.dispatch(fetchAllProducts())
    expect(store.getState().productReducer.productsList.length).toBeGreaterThan(0)
  })
  test('add products to the current state', () => {
    products.map(product => store.dispatch(addProduct(product)))
    expect(store.getState().productReducer.productsList.length).toBe(3)
  })
  test('sort products by category, ascending/descending price', () => {
    products.map(product => store.dispatch(addProduct(product)))
    store.dispatch(sortByCategory('Shoes'))
    expect(store.getState().productReducer.currentList.length).toBe(2)
    store.dispatch(sortByPriceAsc())
    expect(store.getState().productReducer.currentList[1].price).toBe(515)
    store.dispatch(sortByPriceDesc())
    expect(store.getState().productReducer.currentList[0].price).toBe(846)
  })
  test('add the created product to the API and to the store', async() => {
    await store.dispatch(addProductToApi({
      title: "Handmade Steel Bike",
      price: 894,
      description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      categoryId: 1,
      images: [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=7834",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=9538",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=315"
      ]
    }))
    expect(store.getState().productReducer.productsList.length).toBe(1)
  })
})
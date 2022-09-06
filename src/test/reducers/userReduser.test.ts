import { login } from "../../redux/reducers/userReducer";
import createTestStore from "../utils/testStore";

let store = createTestStore()

beforeEach(() => {
  store = createTestStore()
})

describe('test user reducer', () => {
  test('user should login successfully', async () => {
    await store.dispatch(login({
      email: 'john@mail.com',
      password: 'changeme'
    }))
    expect(store.getState().userReducer.currentUser).toBeDefined()
  })
  test('user should not login with wrong credential', async () => {
    await store.dispatch(login({
      email: 'test@test.com',
      password: 'failtest'
    }))
    expect(store.getState().userReducer.currentUser).toBeUndefined()
  })
  // test('user with token should login successfully', async () => {
  //   // await store.dispatch(loginByToken({
  //   //   token: localStorage.getItem('access_token'),
  //   // }
  //   // ))
  // })

})
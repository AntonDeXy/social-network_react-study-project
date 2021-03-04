import { actions, follow } from "./users-reducer"
import { usersAPI } from "../API/users-api"
import { APIResponseType, ResultCodeEnum } from "../API/Api"

jest.mock('../API/users-api')

const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const USERID = 1
const result: APIResponseType = {
  data: {},
  messages: [],
  resultCode: ResultCodeEnum.Success
}

test("success follow thunk", async () => {
  usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
  const thunk = follow(USERID)
  const dispatchMock = jest.fn()
  const getStateMock = jest.fn()

  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenCalledWith(1, actions.toggleFollowingProgress(true, USERID))
  expect(dispatchMock).toHaveBeenCalledWith(2, actions.followSuccess(USERID))
  expect(dispatchMock).toHaveBeenCalledWith(2, actions.toggleFollowingProgress(false, USERID))
})
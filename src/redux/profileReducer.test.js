import profileReducer, { addPost, deletePost } from "./profileReducer"

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likes: 121 },
    { id: 2, message: "Yooooo", likes: 282 },
    { id: 3, message: "It`s my first post", likes: 212 },
  ],
}

it('new post should be incremented', () => {
  //1 test data
  let action = addPost('test')
  
  // 2 action
  let newState = profileReducer(state, action)

  // 3 expectation
  expect(newState.posts.length).toBe(4)
});


it('message of new post should be correct', () => {
  //1 test data
  let action = addPost('test')

  // 2 action
  let newState = profileReducer(state, action)

  // 3 expectation
  expect(newState.posts[3].message).toBe('test')
});

it('after deleting lenght of messages should be decremented', () => {
  //1 test data
  let action = deletePost(1)

  // 2 action
  let newState = profileReducer(state, action)

  // 3 expectation
  expect(newState.posts.length).toBe(2)
});

it('after deleting lenght of messages shouldn`t be decremented if id is incorrect', () => {
  //1 test data
  let action = deletePost(1000)

  // 2 action
  let newState = profileReducer(state, action)

  // 3 expectation
  expect(newState.posts.length).toBe(3)
});

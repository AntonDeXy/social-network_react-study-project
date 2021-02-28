import React from "react"
import { create } from "react-test-renderer"
import ProfileStatus from './ProfileStatus.js';

describe("Pro fileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="react Study" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("react Study");
  });

  test("after creation span with status should be displayed", () => {
    const component = create(<ProfileStatus status="react Study" />);
    const root = component.root;
    let span = root.findByType('span')
    expect(span).noy.toBeNull();
  });

  test("after creation input shouldn`t be displayed", () => {
    const component = create(<ProfileStatus status="react Study" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType('input')
    }).toTrow();
  });

  test("after creation span with status should сщтефшті correct status", () => {
    const component = create(<ProfileStatus status="react Study" />);
    const root = component.root;
    let span = root.findByType('span')
    expect(span.children[0]).toBe('react Study');
  });

  test("input shoul be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="react Study" />);
    const root = component.root;
    let span = root.findByType('span')
    span.props.onDoubleClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe('react Study');
  });


  test("callback should be called", () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status="react Study" updateStatus={ (status)=> {mockCallback} } />);
    const instance = component.getInstance();
    instance.disableEditMode()
    expect(mockCallback.mock.calls.lenght).toBe(1);
  });
});
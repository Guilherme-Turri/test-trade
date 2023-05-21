import { act, renderHook } from "@testing-library/react"
import { useInput } from "./useInput"
import React from 'react';

describe('useForm custom hook', () =>{
  it('should return default values', () =>{
    const {result} = renderHook(() =>useInput())
    expect(result.current.value).toBe('')
    expect(result.current.error).toBe('')
    expect(result.current.onChange).toBeInstanceOf(Function)
    expect(result.current.setValue).toBeInstanceOf(Function)
  })

  it('should return new values in a Input Element with no error regex', () =>{
    const {result} = renderHook(() =>useInput())
    const event = {
      target: { value: "NameTest", placeholder: "Nome" }
    } as React.ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChange(event);
    });
    expect(result.current.value).toBe('NameTest')
    expect(result.current.error).toBe('')
  })

  it('should return new values in a Input Element with error regex', () =>{
    const {result} = renderHook(() =>useInput())
    const event = {
      target: { value: "N", placeholder: "Nome" }
    } as React.ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChange(event);
    });
    expect(result.current.value).toBe('N')
    expect(result.current.error).toBe('Please, at least two characters.')
  })
})
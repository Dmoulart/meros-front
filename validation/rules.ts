export const rules = {
  required: (value: string) => !!value || 'Required',
  email: (value: string) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    ) || 'Invalid email',
  min: (length: number) => (value: string) =>
    value.length >= length || `Must be at least ${length} characters`,
  max: (length: number) => (value: string) =>
    value.length <= length || `Must be at most ${length} characters`,
  pattern: (pattern: string) => (value: string) =>
    new RegExp(pattern).test(value) || 'Invalid format'
}

export const validate = (rule: (...args: Array<any>) => boolean | string) => (...args: Array<any>) => {
  const result = rule(...args)
  return typeof result === 'string' ? { error: result } : { error: null }
}

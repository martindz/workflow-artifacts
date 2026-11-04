import '@testing-library/jest-dom/vitest'

if (typeof window.localStorage === 'undefined') {
  const values = new Map()
  Object.defineProperty(window, 'localStorage', {
    configurable: true,
    value: {
      get length() {
        return values.size
      },
      clear: () => values.clear(),
      getItem: (key) => values.get(String(key)) ?? null,
      key: (index) => [...values.keys()][index] ?? null,
      removeItem: (key) => values.delete(String(key)),
      setItem: (key, value) => values.set(String(key), String(value)),
    },
  })
}

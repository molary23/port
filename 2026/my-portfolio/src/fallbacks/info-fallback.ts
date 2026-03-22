import data from './default-info.json'

export const loadInfoFallback = (): RegularObject => {
  console.log('Using fallback info')
  return data
}

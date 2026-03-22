export const getInfo = async (): Promise<unknown> => {
  let URL: string
  const requestOptions: RequestInit = {
    headers: {'Content-Type': 'application/json'},
  }
  if (process.env.NODE_ENV !== 'production') {
    URL = 'info.json'
  } else {
    URL = `${process.env.REACT_APP_SECURE_URL}info.php`
    requestOptions.headers = {
      ...requestOptions.headers,
      Authorization: `Bearer ${process.env.REACT_APP_SECURE_INFO_KEY}`,
    }
  }
  try {
    const res: Response = await fetch(URL, requestOptions)
    return await res.json()
  } catch (error) {
    console.log('Error while fetching info', error)
    return {}
  }
}

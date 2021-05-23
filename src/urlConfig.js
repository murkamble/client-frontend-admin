const baseUrl = location.hostname === 'localhost'
    ? "http://localhost:4000"
    : "https://bazaar-by-mayur-kamble.herokuapp.com"

export const api = `${baseUrl}/api`

export const generatePublicUrl = (fileName) => {
    return `${baseUrl}/public/${fileName}`
}

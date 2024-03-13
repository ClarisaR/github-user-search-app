export async function getUserByUsername(username){

    const response = await fetch('https://api.github.com/users' + '/' + username, {
        headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
        }
    })
    if(response.status<200 || response.status>299){
        throw Error('User not found')
    }
    const json = await response.json()
    return json
}
import { request } from "../../services/api"

export function Dashboard () {

    async function getUserInfos () {
        const token = localStorage.getItem("@TOKEN")

        const config = {
           headers: { Authorization : `Bearer ${token}`}
        }

        try {
            const response = await request.get("/profile", config)
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }

    getUserInfos()

    return (
        <h1>Dashboard</h1>
    )
}
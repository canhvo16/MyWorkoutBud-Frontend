import Client from './index'

export const GetUserGoals = async (id) => {
  try {
    const res = await Client.get(`/goalTracker/user/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

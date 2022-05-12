import Client from './index'

export const GetUserGoals = async (id) => {
  try {
    const res = await Client.get(`/goalTracker/user/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddDaysCompleted = async (id) => {
  try {
    const res = await Client.put(`/goalTracker/addDaysCompleted/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const MinusDaysCompleted = async (id) => {
  try {
    const res = await Client.put(`/goalTracker/minusDaysCompleted/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

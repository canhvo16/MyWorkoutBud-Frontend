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

export const CreateGoal = async (data) => {
  try {
    const res = await Client.post('/goalTracker/create', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserWorkoutLogs = async (id) => {
  try {
    const res = await Client.get(`workoutLog/user/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserExerciseLogs = async (id) => {
  try {
    const res = await Client.get(`exerciseLog/workoutLog/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserSetLogs = async (id) => {
  try {
    const res = await Client.get(`set/exerciseLog/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserExercise = async (id) => {
  try {
    const res = await Client.get(`exercise/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetMuscleGroup = async (id) => {
  try {
    const res = await Client.get(`/muscleGroup/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetExercises = async () => {
  try {
    const res = await Client.get('/exercise')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetExerciseByMuscleGroup = async (id) => {
  try {
    const res = await Client.get(`/exercise/muscleGroup/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateWorkoutLog = async (data) => {
  try {
    const res = await Client.post('/workoutLog/create', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetWorkoutLogById = async (id) => {
  try {
    const res = await Client.get(`/workoutLog/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAllMuscleGroups = async () => {
  try {
    const res = await Client.get(`/muscleGroup`)
    return res.data
  } catch (error) {
    throw error
  }
}

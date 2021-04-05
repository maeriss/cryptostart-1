import { createUser } from '../models/user-queries.js'

export const createUserController = async (req, res) => {
  // Récupération des données de la requête
  const userData = req.body.user
  // Utilisation de createUser des queries
  try {
    const user = await createUser(userData)
    res.status(201).json({
      success: true,
      user
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

export const updateUserController = async (req, res) => {
  // Récupération des données de la requête
  const userData = req.body.user
  // Utilisation de updateUser des queries
  /**updateUser(userData)
    .then((user) => {
      res.json({
        success: true,
        user
      })
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({
        success: false,
        message : 'Impossible de modifier l\'utilisateur'
      })
    })*/
    try {
      const user = await updateUser(userData)
      res.status(201).json({
        success: true,
        user
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message
      })
    }
}
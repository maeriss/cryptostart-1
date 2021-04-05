import User from './user-model.js'

// CRUD
// Create
// Retrieve
// Update
// Delete

/**
 * Crée un utilisateur dans la base de données
 * 
 * @function
 * @async
 * 
 * @param {import('./user-model').UserData} userData 
 * @returns {Promise.<import('./user-model').UserMongooseDocument>}
 */
export function createUser (userData) {
  const user = new User(userData)
  return user.save().then(() => user)
}

/**
 * Récupère un user par son id
 *
 * @async
 * @function
 *
 * @param {string} id - Id du user
 *
 * @returns {Promise.<UserMongooseDocument>} user correspondant
 */
export function getUserById(id) {
  return User.findById(id)
}

/**
 * Retourne un centre à partir de son username
 *
 * @async
 * @function
 *
 * @param {string} username - Nom d'utilisateur
 *
 * @returns {Promise.<UserMongooseDocument>} User correspondant
 */
export function getUserByUsername(username) {
  return User.findOne({ username })
}

/**
 * Retourne tous les users présents dans la base de données
 *
 * @async
 * @function
 *
 * @returns {Promise.<UserMongooseDocument[]>} Liste des users
 */
export function getUsers () {
  return User.find()
}

/**
 * Modifie un user dans la base de données
 *
 * @async
 * @function
 *
 * @param {UserMongooseDocument} user - Le user à modifier
 * @property {string} firstname - Prénom
 * @property {string} lastname - Nom
 * @property {string} email - Adresse email
 * @property {string} login - Nom d'utilisateur
 * @property {string} password - Mot de passe
 *
 * @returns {Promise.<UserMongooseDocument>} user modifié
 */
export async function updateUser (userData) {
  const user = await User.findById(userData.id)
  for ( const prop in userData){
    user[prop] = userData[prop]
  }
  await user.save()
  return user
}

export function modifyUser (userData) {
  return User.findByIdAndUpdate(userData.id,userData,{new: true})
}

/**
 * Supprime un user de la base de données
 *
 * @async
 * @function
 *
 * @param {UserMongooseDocument} user - L'user à supprimer
 *
 * @returns {Promise.<UserMongooseDocument>} L'user supprimé
 */
export function deleteUser (user) {
  User.deleteOne({ id: user.id })
  return user
}
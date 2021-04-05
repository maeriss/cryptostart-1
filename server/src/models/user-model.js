import mongoose from 'mongoose'
import { hash } from '../utils/crypto-utils.js'

const { Schema } = mongoose

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, 'Le prénom est manquant'],
      trim: true
    },
    lastname: {
      type: String,
      required: [true, 'Le nom est manquant'],
      trim: true
    },
    email: {
      type: String,
      required: [true, "L'adresse email est manquante"],
      trim: true,
      lowercase: true,
      unique: true
    },
    username: {
      type: String,
      required: [true, "Le nom d'utilisateur est manquant"],
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Le mot de passe est manquant']
    }
  }
)

UserSchema.set('toJSON', {
  transform (doc, ret) {
    delete ret.password
    return ret
  }
})

UserSchema.pre('save', async function preSave (done) {
  const user = this

  if (!user.isModified('password')) {
    return
  }
  user.password = await hash(user.password)
})

export default mongoose.model('User', UserSchema)

/**
 * @typedef UserMongooseDocument
 * @type {UserData & import('mongoose').Document}
 */

/**
 * @typedef UserData
 * @type {Object}
 *
 * @property {string} firstname - Prénom
 * @property {string} lastname - Nom
 * @property {string} email - Adresse email
 * @property {string} username - Nom d'utilisateur
 * @property {string} password - Mot de passe
 */

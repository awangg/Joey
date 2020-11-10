const jwt = require('../utils/jwt')
const { User } = require('../models')
const ApiError = require('../utils/error')

const login = async (email, password) => {
  const user = await User.findOne({ email: email })
  if(!user) throw new ApiError('User Not Found', 404)

  let authorized = await user.comparePassword(password)
  if(authorized) {
    const token = await jwt.generate(email)
    return {
      token: token
    }
  } else { throw new ApiError('Incorrect Password', 401) }
}

const signup = async (data) => {
  const { value, error } = await User.validateModel(data)
  if(error) throw new ApiError(error.details[0].message, 400)

  const existing = await User.findOne({ email: value.email })
  if(existing) throw new ApiError('User Already Exists', 401)
  
  const user = new User(value)
  return user.save()
}

const me = async (token) => {
  const decoded = jwt.decode(token)
  const user = await User.findOne({ email: decoded.email })
  if(!user) throw new ApiError('User Not Found', 404)
  let data = JSON.parse(JSON.stringify(user))
  delete data.password
  return data
}

module.exports = {
  login: login,
  signup: signup,
  me: me
}
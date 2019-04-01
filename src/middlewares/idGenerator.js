import { ADD_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  const { type, payload } = action
  const generatedId = Date.now()

  if (type === ADD_COMMENT) {
    payload.generatedId = generatedId
  }

  next(action)
}

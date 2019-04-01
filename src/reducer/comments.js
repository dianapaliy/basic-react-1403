import {} from '../constants'
import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (comments = defaultComments, action) => {
  const { type } = action

  switch (type) {
    case ADD_COMMENT:
      const {
        payload: { comment, generatedId }
      } = action

      return { ...comments, [generatedId]: { ...comment, id: generatedId } }

    default:
      return comments
  }
}

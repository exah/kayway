import { useRouteMatch } from 'react-router-dom'

const __DO_NOT_MATCH_PARENT__ = Symbol(
  'Used as unique placeholder for `path` in `useRouteMatch`'
)

export function useStrictRouteMatch(path = __DO_NOT_MATCH_PARENT__) {
  return useRouteMatch(path)
}

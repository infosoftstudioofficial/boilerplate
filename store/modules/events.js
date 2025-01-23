const initialState = () => {
  return {
    filter: {
      first: 10,
      skip: 0,
      title: ''
    }
  }
}

const state = () => {
  return initialState()
}

const mutations = {
  SET_FILTER (state, payload) {
    state.filter = Object.assign({}, state.filter, payload)
  },
  RESET_EVENT_STATE (state) {
    /*
          FUNCTION:
          RESET TO INITIAL STATE. YOU WILL APPRECIATE THIS FUNCTIONALITY
          WHEN YOU ALREADY DEALING WITH COOKIE / LOCAL STORAGE
        */
    Object.assign(state, initialState())
  }
}

const actions = {
  POST_API ({ commit }, payload) {
    return postApi(`${payload.api}`, payload.data)
  },
  GET_API ({ commit }, payload) {
    return getApi(`${payload.api}`, payload.data)
  },
  DELETE_API ({ commit }, payload) {
    return deleteApi(`${payload.api}`, payload.data)
  },
  DELETE_WITH_PAYLOAD_API ({ commit }, payload) {
    return deleteApi(`${payload.api}`, { data: payload.data })
  },
  PATCH_API ({ commit }, payload) {
    return patchApi(`${payload.api}`, payload)
  }
}

const getters = {
  filter: state => state.filter
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

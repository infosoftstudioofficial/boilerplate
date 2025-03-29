const initialState = () => {
  return {
    filter: {
      first: 10,
      skip: 0,
      title: ''
    },
    active_index: null,
    is_active: null,
    drawer: true,
    user: {
      client: {
        first_name: 'Infosoft',
        middle_name: 'Admin',
        last_name: 'Admin',
        suffix: ''
      },
      role: {
        role: 'Administrator'
      },
      email: 'superadmin@admin.com'
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
  SET_ACTIVE_INDEX (state, payload) {
    state.active_index = payload
  },
  SET_IS_ACTIVE (state, payload) {
    state.is_active = payload
  },
  SET_DRAWER (state, payload) {
    state.drawer = payload
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
  filter: state => state.filter,
  active_index: state => state.active_index,
  is_active: state => state.is_active,
  drawer: state => state.drawer,
  user: state => state.user
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

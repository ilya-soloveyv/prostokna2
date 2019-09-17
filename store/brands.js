export const state = () => ({
  list: []
})

export const mutations = {
  get (state, brands) {
    state.list = brands
  },
  add (state, text) {
    state.list.push({
      sBrandTitle: text,
      iActive: false
    })
  },
  toggle (state, brand) {
    brand.iActive = !brand.iActive
  }
}

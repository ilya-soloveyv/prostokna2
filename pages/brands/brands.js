import { mapMutations } from 'vuex'
import axios from '~/plugins/axios'

export default {
  async fetch ({ store, params }) {
    let { data } = await axios.get('/api/brands')
    store.commit('brands/get', data)
  },
  computed: {
    brands () {
      return this.$store.state.brands.list
    }
  },
  methods: {
    addBrand (e) {
      this.$store.commit('brands/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'brands/toggle'
    })
  }
}

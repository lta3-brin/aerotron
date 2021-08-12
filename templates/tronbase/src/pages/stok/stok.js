import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {defineComponent, ref, onBeforeMount} from "vue"
import {Notify} from "quasar"


export default defineComponent({
  name: 'Halaman Stok',
  setup() {
    const store = useStore()
    const router = useRouter()

    // Dropdown menu
    const kategori = ref(null)
    const stringOptions = ["Listrik", "Mekanik"]
    const options = ref(stringOptions)

    const filterFn = (val, update) => {
      update(() => {
        const needle = val.toLocaleLowerCase()
        options.value = stringOptions.filter(v => v.toLocaleLowerCase().indexOf(needle) > -1)
      })
    }

    const setModel = (val) => {
      kategori.value = val
    }

    // Pagination
    const count = ref(10)
    const current = ref(1)

    // Pencarian
    const temukan = ref(null)
    const temukanRef = ref(null)
    const temukanRules = [
      val => (val && val.length > 0) || 'perlu diisi'
    ]

    const onSearch = () => {
      temukanRef.value.validate()

      if (!temukanRef.value.hasError) {
        console.log(temukan.value)
      }
    }

    const onReset = () => {
      temukan.value = null
      temukanRef.value.resetValidation()
    }

    // Stok barang
    const page = ref(0)
    const barang = ref({count: 0, results: [], next: null, previous: null})
    const getBarang = async () => {
      try {
        const res = await store.dispatch("stok/getBarangAction", {page: page.value})
        const payload = res.data

        store.commit("stok/setBarangMutation", {payload: payload["results"]})
        barang.value["results"] = store.getters["stok/barangGetter"]
        barang.value["count"] = payload["count"]
        barang.value["next"] = payload["next"]
        barang.value["previous"] = payload["previous"]
      }

      catch (err) {
        let message

        if (err.response) {
          message = err.response.data.detail || "Something is wrong happening."
        }

        else if (err.request) {
          message = err.request.responseText || "Server is not ready yet."
        }

        else {
          message = err.message
        }

        Notify.create({
          type: "negative",
          message: message
        })
      }
    }

    onBeforeMount(async () => {
      await getBarang()
    })

    return {
      barang,
      kategori,
      options,
      count,
      current,
      temukan,
      temukanRef,
      temukanRules,
      onSearch,
      onReset,
      filterFn,
      setModel,
      getBarang
    }
  }
})

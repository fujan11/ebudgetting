import { createApp } from 'vue'
import i18n from './i18n'
import { createVuestic } from 'vuestic-ui'
import { createGtm } from '@gtm-support/vue-gtm'
import "bootstrap/dist/js/bootstrap.js"
import stores from './stores'
import router from './router'
import DataVue from "./components/datavue/Datavue.vue"
import AppNotify from "./components/AppNotify.vue"
import BaseInput from "./components/form/Baseinput.vue"
import BaseSelect from "./components/form/BaseSelect.vue"
import BaseTextArea from "./components/form/BaseTextarea.vue"
import vuesticGlobalConfig from './services/vuestic-ui/global-config'
import App from './App.vue'

const app = createApp(App)

app.use(stores)
app.use(router)
app.use(i18n)
app.use(createVuestic({ config: vuesticGlobalConfig }))

if (import.meta.env.VITE_APP_GTM_ENABLED) {
  app.use(
    createGtm({
      id: import.meta.env.VITE_APP_GTM_KEY,
      debug: false,
      vueRouter: router,
    }),
  )
}
app.component("data-vue", DataVue)
app.component("app-notify", AppNotify)
app.component("base-input", BaseInput)
app.component("base-select", BaseSelect)
app.component("base-textarea", BaseTextArea)

app.mount('#app')


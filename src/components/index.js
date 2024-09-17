import ImageView from './imageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentsPlugin = {
  install(app){
    app.component('XtxImageView',ImageView)
    app.component('XtxSku',Sku)
  }
}
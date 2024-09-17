// 定义懒加载插件
import { useResizeObserver } from '@vueuse/core'
export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy',{
      mounted(el,binding){
        const { stop } = useResizeObserver(
          el,
          ([{isIntersecting}]) => {
            if(isIntersecting){
              el.src = binding.value
              stop()
            }
          }
        )
      }
    })
  }
}
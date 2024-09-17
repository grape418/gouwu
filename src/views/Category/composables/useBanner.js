// 封装banner轮播图相关的
import { getBanner} from '@/apis/home'
import { ref,onMounted } from 'vue'

export function useBanner(){
  let bannerList = ref([])
  const getBannerList = async() => {
    const result = await getBanner({
      distributionSite: '2'
    })
    bannerList.value = result.result
  }
  onMounted(()=>{
    getBannerList()
  })
  return {
    bannerList
  }
}


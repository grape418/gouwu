import httpInsatnce from "@/utils/http";

export function getBanner(params = {}){
  const {distributionSite = '1'} = params
  return httpInsatnce({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

export const findNewAPI = () => {
  return httpInsatnce({
    url: "/home/new"
  })
}

export const findHotAPI = () => {
  return httpInsatnce({
    url: "/home/hot"
  })
}

export const getGoodsAPI = () => {
  return httpInsatnce({
    url: '/home/goods'
  })
}

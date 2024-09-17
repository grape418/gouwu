import httpInsatnce from "@/utils/http";

export const getDetail = (id) => {
  return httpInsatnce ({
    url: '/goods',
    params: {
      id
    }
  })
}

export const getchHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return httpInsatnce({
    url:'/goods/hot',
    params:{
      id, 
      type, 
      limit
    }
  })
}


import httpInsatnce from "@/utils/http";

export const getTopCategoryAPI = (id) => {
  return httpInsatnce({
    url:'/category',
    params:{
      id
    }
  })
}


export const getCategoryFilterAPI = (id) => {
  return httpInsatnce({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
   export const getSubCategoryAPI = (data) => {
    return httpInsatnce({
      url:'/category/goods/temporary',
      method:'POST',
      data
    })
  }
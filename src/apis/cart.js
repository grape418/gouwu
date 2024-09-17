import httpInsatnce from "@/utils/http";
// 加入购物车
export const insertCartApi = ({skuId, count}) => {
  return httpInsatnce ({
    url: '/member/cart',
    method: "POST",
    data: {
      skuId,
      count
    }
  })
}

export const findNewCartListAPI =() => {
  return httpInsatnce({
    url: '/member/cart',
    method: "GET"
  })
}

export const deleteCartListAPI =({ids}) => {
  return httpInsatnce({
    url: '/member/cart',
    method: "DELETE",
    data: {
      ids
    }
  })
}


export const mergeCartAPI =(data) => {
  return httpInsatnce({
    url: '/member/cart/merge',
    method: "POST",
    data
  })
}



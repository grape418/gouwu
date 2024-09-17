import httpInsatnce from "@/utils/http";

export const getCheckInfoAPI = () => {
  return httpInsatnce({
    url: '/member/order/pre'
  })
}

export const getAddressInfoAPI = () => {
  return httpInsatnce({
    url: '/member/address'
  })
}

export const createOrderAPI = (data) => {
  return httpInsatnce({
    url:'/member/order',
    method: "POST",
    data
  })
}

export const getOrderAPI = (id) => {
  return httpInsatnce({
    url:`/member/order/${id}`,
    method: "get",
  })
}


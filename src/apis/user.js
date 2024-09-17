import httpInsatnce from "@/utils/http";
export const loginAPI = ({account,password}) => {
  return httpInsatnce({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}
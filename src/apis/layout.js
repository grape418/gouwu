import httpInsatnce from "@/utils/http";

export function getCategory(){
  return httpInsatnce({
    url: '/home/category/head'
  })
}
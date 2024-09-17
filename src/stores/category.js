import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategory } from '@/apis/layout' 

export const useCatrgoryStore = defineStore('category', () => {
let headerArr = ref([])
const getHeaderDate = async() => {
  const result = await getCategory()
  headerArr.value = result.result
}
  return{
    headerArr,
    getHeaderDate
  }
})
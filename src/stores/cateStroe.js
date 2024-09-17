import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import { insertCartApi, findNewCartListAPI, deleteCartListAPI} from '@/apis/cart'

export const useCartStore = defineStore('cart',() => {
  const userStore = useUserStore()
  const isLgoin = computed(() => userStore.userInfo.token)
  const cartList = ref([])
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if(isLgoin.value){
      await insertCartApi({skuId, count})
      updateNewList()
    }else{
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if(item){
      item.count ++
    }else{
      cartList.value.push(goods)
    }
    }
    
  } 
  const delCart = async(skuId) => {
    if(isLgoin.value){
      await deleteCartListAPI([skuId])
      updateNewList()
      
    }else{
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx,1)
    }
    
  }

  const updateNewList = async() => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }
  // 计算
  const allCount = computed(() => cartList.value.reduce((a,c) => a + c.count,0))
  const allPrice = computed(() => cartList.value.reduce((a,c) => a + c.count * c.price,0))
  const isAll = computed(() => cartList.value.every((item) => item.selected))
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }

  const singleCheck = (skuId,selected) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }

  const iscount = computed(() => cartList.value.filter(item => item.selected).reduce((a,c) => a + c.count,0))
  const isPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a,c) => a + c.count * c.price,0))

  const clearCart = () => {
    cartList.value = []
  }
  return{
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    allCheck,
    iscount,
    isPrice,
    clearCart,
    updateNewList
  }
},
{
  persist: true
})
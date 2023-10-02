
import { ref } from 'vue'

const useCounter = (valorrecibidomixinnopuede = 5) =>  {
    const counter = ref(valorrecibidomixinnopuede)

    // const increase = () => {
    //     counter.value++
    // }
    const decrease = () => {
        counter.value--
    }
    
    return{
        counter,
        increase: ()=> counter.value++,
        decrease
    }
}

export default useCounter
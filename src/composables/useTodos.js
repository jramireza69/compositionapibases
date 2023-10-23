
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
    const store = useStore()
    const currenTab = ref('all')
    let testimput = ref('')
    let isOpen = ref(true)


    return {
      currenTab,
        isOpen,
        testimput,
     all: computed(() => store.getters['all']),
     pending: computed(() => store.getters['allTodos']),
     completed: computed(() => store.getters['todoCompleted']),
     getTodosByTab: computed(() => store.getters['getTodosByTab'](currenTab.value) ),
     //  Methods
      toggleTodo: ( id ) => store.commit('toggleTodo', id),
      createTodo: ( id ) => store.commit('createTodo', testimput.value)

    }


}

export default useTodos
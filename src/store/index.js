import { createStore } from 'vuex'


export default createStore({
    state: {
        todos: [
            {id: '1', text: 'Tarea 1',completed: false},
            {id: '2', text: 'Tarea 2',completed: false},
            {id: '3', text: 'Tarea 3',completed: false},
            {id: '4', text: 'Tarea 4',completed: true },
            {id: '5', text: 'Tarea 5',completed: true }
        ]
    },
    muttations: {},
    actions: {},
    getters: {
        todoPendiente(state){
            return state.todos.filter(todo => !todo.completed)
        },
        alltodos: (state) =>   state.todos ,
        completedtodos: (state) => state.todos.filter(todo => todo.completed)
    },
    modules: {},
})
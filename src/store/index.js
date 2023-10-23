import { createStore } from 'vuex'
import {v4 as uuidv4} from 'uuid'


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
    mutations: {
        toggleTodo(state, id){
             const todoIdx = state.todos.findIndex(todo => todo.id === id ) 
             state.todos[todoIdx].completed = !state.todos[todoIdx].completed
            //  console.log('el comit llamado en la mutation es', todoIdx);
        },
        createTodo(state, text = ''){
          if(text.lengh <= 1 )return

          state.todos.push({
            id: uuidv4(),
            completed: false,
            // text: text
            text
          })
        }
    },
    actions: {},
    getters: {
        pending(state){
            return state.todos.filter(todo => !todo.completed)
        },
        all: (state) =>   state.todos ,
        todoCompleted: (state) => state.todos.filter(todo => todo.completed),
        getTodosByTab: ( _ , getters )  => ( tab ) => {
            switch ( tab ) {
                case 'all': return getters.all
                case 'pending': return getters.pending
                case 'completed': return getters.todoCompleted                                      
            }
        }, 
    },
    // getTodosByTab: () => () => {} retur otra funcion
    modules: {},
})
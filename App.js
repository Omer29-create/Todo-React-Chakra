import { Heading } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { VStack, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import {useState, useEffect} from 'react'

function App () {
    const initialTodos = [
        {
            id: 1,
            body: 'get bread',
        },
        {
            id: 2,
            body: 'get butter',
        },
    ];

    const [todos, setTodos] = useState(initialTodos);

    function deleteTodo(id) {
        const newTodos = todos.filter(todo => {
            return todo.id !== id;
        });
        setTodos(newTodos);
    }
  
    return (
        <VStack p={4}>
        <IconButton 
        icon={<FaSun />} 
        isRound="true" 
        size="lg" 
        alignSelf="flex-end" 
        />
            <Heading 
            mb="8" 
            fontWeight="extrabold" 
            size="2xl" 
            bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
            bgClip="text" 
            >
            Todo Application
            </Heading>;
            <TodoList todos={todos} deleteTodo={deleteTodo}/>
            <AddTodo />
        </VStack>
    )
}

export default App;

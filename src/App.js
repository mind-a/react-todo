import { useCallback, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.scss';
import { light, dark } from './theme/theme.js'
import { GlobalStyle } from './theme/GlobalStyles.js'
import TodoList from './Components/TodoList.js'
import TodoAdd from './Components/TodoAdd.js';
import TodoTemplate from './Components/TodoTemplate.js'

function App() {
  const [isDark, setIsDark] = useState(false);
  const switchDarkMode = () => {
    setIsDark((prev)=> !prev);
  };

  const [memo, setMemo] = useState([
    {
      id: 1,
      text: "산책하기",
      checked: true,
      star: false
    }
  ]);

  //useState로 이미 아이디 1은 지정되어있기 때문에 다음 할 일의 아이디는 2부터 시작되어야 한다
  const nextId = useRef(2);

  const memoAdd = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
        star: false
      };
      setMemo([...memo, todo]);
      nextId.current++;
      
    },
    [memo]
    );

    const onCheck = useCallback(
      id => {
        setMemo(
          memo.map(todo => 
            todo.id === id 
            ? {...todo, checked: !todo.checked}
            : todo
            )
        );
      },
      [memo]
    );

    const onDelete = useCallback(
      id => {
        setMemo(
          memo.filter(todo => todo.id !== id)
        );
      },
      [memo]
    );

    const onStar = useCallback(
      id => {
        setMemo(
          memo.map(todo =>
            todo.id === id 
            ? {...todo, star: !todo.star }
            : todo
            )
        );
      },
      [memo]
    );
  
  return (
    <div className="App">
      <ThemeProvider theme={isDark ? dark : light} >
        <GlobalStyle />
        <Background isDark={isDark} switchDarkMode={switchDarkMode} />
        <TodoTemplate>
          <TodoAdd memoAdd={memoAdd} />
          <TodoList 
            memo={memo} 
            onDelete={onDelete} 
            onCheck={onCheck} 
            onStar={onStar}  />
          </TodoTemplate>
      </ThemeProvider>
    </div>
  );
}

function Background(props){
  return (
    <div className='background'>
      {
        <button onClick={()=>{ props.switchDarkMode() }}>
          {props.isDark ? `🌚` : `🌞`}</button>
      }
    </div>

  )
}

export default App;

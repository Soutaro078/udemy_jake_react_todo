import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

// Reactのマークアップのやり方（これ描きやすい）
export const Todo = () =>{
  // 入力されたという状態を管理する
  const [todoText, setTodoText] = useState("");

  // 完了した，未完了のTODOを管理する状態
  const [incompleteTodos, setInCompleteTodos] = useState(["TODO1", "TODO2"]);
  const [completeTodos, setCompleteTodos] = useState(["TODO1でした", "TODO2でした"]); 

  //削除ボタンを押した時
  const onClickDelete = (index) => {
    // alert(index);
    // set関数の関係で新しい配列を作る
    const newTodos = [...incompleteTodos];
    // index番目の要素を1つ削除する
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  }

  //戻すボタンを押す時
  const onClickBack = (index) => {
    // 削除パート
    // set関数の関係で新しい配列を作る
    const newCompleteTodos = [...completeTodos];
    // index番目の要素を1つ削除する
    newCompleteTodos.splice(index, 1);

    // 未完了パート
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setInCompleteTodos(newIncompleteTodos);
  }

  //完了ボタンを押した時
  const onClickComplete = (index) => {
    // 削除パート
    // set関数の関係で新しい配列を作る
    const newIncompleteTodos = [...incompleteTodos];
    // index番目の要素を1つ削除する
    newIncompleteTodos.splice(index, 1);

    // 完了パート
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setInCompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }
  
  // テキストを入力した時の処理
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //追加ボタンを押した時のもの
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText("");
  }

  return (
    <>
      <div className = "input-area">
        <input placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className = "incomplete-area">
        <p className = 'title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              // 仮想DOMは前後で差分を見つけていくので，各データが持ってる一意のIDとかをkeyとして入れる
              <li key={todo}>
                <div className = "list-row">
                    <p className = "todo-item">{todo}</p>
                    <button onClick={() => onClickComplete(index)}>完了</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>              
            )
          })}
        </ul>
      </div>
      <div className = "complete-area">
          <p className = 'title'>完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => (
              <li key={todo}>
                <div className = "list-row">
                  <p className = "todo-item">{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// export default App;
// Reactは宣言的なプログラミング（Reactの方が圧倒的に保守性が高い）
// javascriptは手続き的な言語（主語と述語的な）（IDとかおって作っていく）
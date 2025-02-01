const style = {
    backgroundColor: "#c6e5d9",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
}
// CSSのコンポーネント内部での完結方法
//reactはキャメルケースにする（CSSに関しても）

export const InputTodo = (props) => {
    const { todoText, onChange, onClick, disabled} = props;
    return (
        <div style ={style}>
            <input disabled={disabled} placeholder='TODOを入力' value={todoText} onChange={onChange}/>
            <button disabled={disabled} onClick={onClick}>追加</button>
        </div>
    );
    }

//TypeScriptを学んだら更なる応用を知ることができる．
//Reactの学習を進めると，TypeScriptを使うことが多くなる．
//TypeScriptはJavaScriptのスーパーセットであり，型を持つことができる．
//子コンポーネントはただ，親からの命令を聞くだけだから関数渡せばそれっぽくなる．


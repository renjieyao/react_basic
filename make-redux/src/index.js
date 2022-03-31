
// 创建Store集中存储state
function createStore(reducer){
  let state = null;
  const listeners = [];
  // 订阅者模式
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state,action);//覆盖旧对象
    listeners.forEach(listener => listener());
  }
  dispatch({});//初始化state
  return {getState,dispatch,subscribe};
}

// “模块（组件）之间需要共享数据”，和“数据可能被任意修改导致不可预料的结果”之间的矛盾。
// Pure function 一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用
function reducer(state,action){
  if(!state)
    return {
      title: {
        text: 'React.js xiaoshu',
        color: 'red'
      },
      content: {
        text: 'React.js xiaoshuContent',
        color: 'blue'
      }
    }
  switch (action.type){
    case 'UPDATE_TEXT':
      // 共享结构对象
      return {
        ...state,
        title:{
          ...state.title,
          text:action.text
        }
      }
    case 'UPDATE_COLOR':
      return {
        ...state,
        title:{
          ...state.title,
          color:action.color
        }
      }
    default:
      return state;
  }
}

function renderApp(newAppState,oldAppState = {}){
  if(newAppState === oldAppState) return;
  console.log("renderApp");
  reanderTitle(newAppState.title,oldAppState.title);
  renderContent(newAppState.content,oldAppState.content);
}

function reanderTitle(newTitle,oldTitle = {}){
  if(newTitle === oldTitle) return;
  console.log("renderTitle");
  const titleDOM = document.getElementById('title');
  titleDOM.innerHTML = newTitle.text;
  titleDOM.style.color = newTitle.color;
}

function renderContent(newContent,oldContent = {}){
  if(newContent === oldContent) return;
  console.log("renderContent");
  const contentDOM = document.getElementById('content');
  contentDOM.innerHTML = newContent.text;
  contentDOM.style.color = newContent.color;
}
const store = createStore(reducer);
// 缓存旧的state
let oldState = store.getState();
store.subscribe(() => {
  const newState = store.getState();
  renderApp(newState,oldState);
  // 渲染完成后更新oldState
  oldState = newState;
})

renderApp(store.getState());
store.dispatch({type:"UPDATE_TEXT",text:"《react xiaoshu》"});
store.dispatch({type:"UPDATE_COLOR",color:"blue"});
// renderApp(appState);
console.log('Hello world!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of computer',
    options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0; 

const addOne = () => {
    console.log('add One'); 
};
const minusOne = () => {
  console.log('Minus One');
};
const reset = () => {
  console.log('Reset');
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <p>
      <button onClick={addOne}>+1</button>
    </p>
    <p>
      <button onClick={minusOne}>-1</button>
    </p>
    <p>
      <button onClick={reset}>reset</button>
    </p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

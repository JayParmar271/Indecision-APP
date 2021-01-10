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
    count++;
    renderCounterApp(); 
};
const minusOne = () => {
    count--;
    renderCounterApp(); 
};
const reset = () => {
  count = 0;
  renderCounterApp(); 
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
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
      
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp(); 
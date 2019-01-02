class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
          count: props.count,
        };
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.state.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }

    componentDidMount(){
        const strCount = localStorage.getItem('count');
        const count = parseInt(strCount, 10);
        if(!isNaN(count)){
            this.setState(() => ({ count }));
        }
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count +1,
            };
        });
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count -1,
            }
        })
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0,
            }
        })
    }

    render() {
        return (
          <div>
              <h1>Count: {this.state.count}</h1>
              <button onClick={this.handleAddOne}>+1</button>
              <button onClick={this.handleMinusOne}>-1</button>
              <button onClick={this.handleReset}>Reset</button>
          </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));

// let newUser = new User ();
//
// newUser.name = "Jeremiah Tenbrink";
// newUser.age = 32;
// newUser.location = "Colorado Springs";
// newUser.state = "CO";
//
// function getLocation(user) {
//     if (user.location) {
//         if (user.state){
//             return <p>Location: {user.location} , {user.state}.</p>;
//         }else {
//             return <p>Location: {user.location}.</p>;
//         }
//     }
//
//     return null;
// }
//
//
// const templateTwo = (
//     <div>
//         <h1>{newUser.name}</h1>
//         <p>Age: {newUser.age}</p>
//         {getLocation(newUser)}
//     </div>
// );
// let count = 0;
// const addOne = () =>{
//     count++;
//     renderCounterApp();
// };
//
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
//
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
//
// // ReactDOM.render(template, appRoot);
//
// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="my-id" onClick={addOne} className="button">+1</button>
//             <button onClick={minusOne} className="button">-1</button>
//             <button onClick={reset} className="button">Reset</button>
//         </div>
//     );
//
//     ReactDOM.render(templateThree, appRoot);
// };
//
// renderCounterApp();
class VisibilityToggle extends React.Component {

    constructor (props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false,
        }
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
              visibility: !prevState.visibility,
            };
        });
    }

    render() {
        return (
          <div>
              <h1>Visibility Toggle</h1>
              <button onClick={this.handleToggle}>{this.state.visibility ? "Hide details" : "Show details"}</button>
              {this.state.visibility && (
                  <div>
                      <p>Hey. These are some details you can now see!</p>
                  </div>
              )}
          </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

//
// let visible = false;
//
// const onToggle = () => {
//     visible = !visible;
//   render();
// };
//
//
// const appRoot = document.getElementById('app');
//
// const render = () => {
//
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggle}>{visible ? "Hide details" : "Show details"}</button>
//             {visible && (
//                 <div>
//                     <p>These are some details you can now see</p>
//                 </div>
//             )}
//         </div>
//     );
//
//     ReactDOM.render(template, appRoot);
// };
// render();

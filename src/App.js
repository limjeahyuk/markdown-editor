import './App.css';
import { Remarkable } from 'remarkable';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable(); 
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Hello, **world**!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value }); // value 값을 변경
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) }; // 내부함수.. remarkup 객체로 리턴해줌.
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">
          Enter some markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}



export default App;

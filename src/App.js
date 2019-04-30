import React from "react"
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedValue: 'dev'
    }
  }
  changeDropdown = (e) => {
    this.setState({
      selectedValue: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div className="select">
          <select onChange={(e) => this.changeDropdown(e)} value={this.state.selectedValue}>
            <option value="dev">Webface-QA-Status</option>
            <option value="qa">Webface-QA-Tags</option>
          </select>
        </div>
        {this.state.selectedValue && this.state.selectedValue === 'dev' && <SwaggerUI url="https://s3.amazonaws.com/testing-wf-cg/test-param-swagger.json" />}
        {this.state.selectedValue && this.state.selectedValue === 'qa' && <SwaggerUI url="https://s3.amazonaws.com/testing-wf-cg/tags.json" />}
      </div>
    )
  }
}

export default App;

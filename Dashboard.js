import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
class dashboard extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: "",
    people: [],
  };
  componentDidMount() {
    this.callApi()
      //.then((res) => this.setState({ response: res.express }))
      .then((res) => this.setState({ people: res.express }))
      .catch((err) => console.log(err));
  }
  callApi = async () => {
    const response = await fetch("/api/getList");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
        {this.state.people.map((item) => (
          <div key={item.id}>
            <div className="credits text-center" n>
              <div>
                <a
                  href=" "
                  data-qtsb-section="page-job-search-new"
                  data-qtsb-subsection="card-job"
                  data-qtsb-label="link-project-title"
                  data-heading-link="true"
                >
                  {item.heading}
                </a>

                <span>{item.duration}</span>
              </div>

              <p>{item.description}</p>

              <a
                href=" "
                data-qtsb-section="page-job-search-new"
                data-qtsb-subsection="card-job"
                data-qtsb-label="link-skill"
              >
                {item.skills}
              </a>

              <div>{item.price}</div>
              <div>{item.bid}</div>
              <div></div>

              <hr />
            </div>{" "}
          </div>
        ))}
      </div>
    );
  }
}
export default dashboard;

import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const actionOptions = ["coding", "designing", "planning", "writing", "programming", "concluding", "thinking", "optimizing", "refactoring", "simplifying", "debugging", "configuring", "streamlining", "searching", "tweaking", "editing", "learning", "building"];

const junk = ["#", "@", "%", "*", "&amp;", "&lt;", "&gt;", "_", "=", "+", "[" ,"]", "|", "-", "!", "?"];

const randomInt = (min, max) => {
	return Math.round(min + (Math.random() * (max-min)));
}

class IndexPage extends Component {
  constructor(props) {
		super(props);
		this.state = {
			action: "",
			timeoutId: false
		}
  }
  
  componentDidMount() {
		this.tick();
	}

	componentWillUnmount() {
    clearTimeout(this.state.timeoutId);
  }
    
    render() {
      return (
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <p className="action-animation">{this.state.action}</p>
            <div className="follow">
              <a target="_blank" rel="noopener noreferrer" style={{background: "#4875B4"}} href="https://www.linkedin.com/in/stephenunder/"><i className="fab fa-linkedin-in"></i></a>
              <a target="_blank" rel="noopener noreferrer" style={{background: "#4e545a"}} href="https://github.com/stephenunder"><i className="fab fa-github"></i></a>
              <a target="_blank" rel="noopener noreferrer" style={{background: "#1DA1F2", fontSize: '30px'}} href="https://www.twitter.com/stephenunder/"><i className="fab fa-twitter"></i></a>
            </div>
        </Layout>
      )
    }
  
    tick = () => {
      let text = actionOptions[randomInt(0, actionOptions.length-1)];
      const chars = text.split("");
        const glitch = randomInt(0, 3);
        
      for (var i = 0; i < glitch; i++) {
        chars[randomInt(0, chars.length-1)] = junk[randomInt(0, junk.length-1)];
      }
      
      text = chars.join("");
  
      const timeoutId = setTimeout(this.tick, randomInt(16,400));
  
      this.setState({ action: text, timeoutId });
    }
  
}

export default IndexPage;
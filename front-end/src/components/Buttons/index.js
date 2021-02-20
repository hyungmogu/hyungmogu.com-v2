import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';


// Reference: https://stackoverflow.com/questions/47574490/open-a-component-in-new-window-on-a-click-in-react
function copyCSS(source, target) {
  const styleEl = target.createElement('style');

  for (let stylesheet of source.styleSheets) {
    for (let cssRule of stylesheet.rules) {
      styleEl.appendChild(source.createTextNode(cssRule.cssText));
    }
  }

  target.head.appendChild(styleEl);
}

class PrintPortal extends PureComponent {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.printWindow = null;
  }

  componentDidMount() {
    this.printWindow = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    this.printWindow.document.title = 'Print Resume';
    this.printWindow.document.body.appendChild(this.container);
    copyCSS(document, this.printWindow.document);
    this.printWindow.print();
    this.printWindow.addEventListener('beforeunload', () => {
      this.props.closePortal();
    });
  }

  componentWillUnmount() {
    this.printWindow.close();
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.container);
  }
}


export class PrintButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    }
  }
  render() {
    const Button = styled.button`
      border: none;
      background-color: white;
      border-radius: 50%;
      box-shadow: 3px 5px 8px grey;
      position: fixed;
      right: 0;
      bottom: 0;
      font-size: 1.5em;
      text-decoration: none;
      color: inherit;
      padding: 1em;
      margin: 1.25em;

      div {
        width: 1.25em;
        height: 1.25em;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
    return (
      <>
        { !this.state.on && (
            <Button onClick={this.openPortal}>
              <div>
                <FontAwesomeIcon icon={faPrint} />
              </div>
            </Button>
          )
        }
        {
          this.state.on && (
              <PrintPortal closePortal={this.closePortal}>
                {this.props.children}
              </PrintPortal>
            )
        }

      </>
    );
  }

  openPortal = () => {
    this.setState({on: true})
  }

  closePortal = () => {
    this.setState({on: false})
  }
}

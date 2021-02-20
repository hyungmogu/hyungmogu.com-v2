import React, { Component } from 'react';
import { renderToString } from 'react-dom/server'

import { AppConsumer } from '../../components/Context';
import Resume from '../../components/Resume';
import { PrintButton } from '../../components/Buttons';
import { Screen } from '../lib';


class ResumeScreen extends Component {
    constructor(props) {
        super(props);
        this.resumeRef = React.createRef();
        this.data = this.props.appContext.data;
    }

    // ref: https://stackoverflow.com/questions/12997123/print-specific-part-of-webpage
    print = () => {
        const WinPrint = window.open('', '', 'left=0,top=0,width=1200,height=900,toolbar=0,scrollbars=0,status=0');
        const e = renderToString(<Resume data={this.data}/>);
        WinPrint.document.write(e);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
    }

    render() {
        return (
            <Screen title={"Resume"}>
                <Resume data={this.data} ref={this.resumeRef}/>
                {/* <PrintButton onClick={this.print}/> */}
                <PrintButton>
                    <Resume data={this.data}/>
                </PrintButton>
            </Screen>
        );
    }
}


export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <ResumeScreen
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));
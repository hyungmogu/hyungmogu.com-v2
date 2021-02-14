import React, { Component } from 'react';

import { AppConsumer } from '../../components/Context';
import { WorkSummarySection, DemoSection, ImagesSection } from './lib';
import { Screen } from '../lib';


class WorkDetailScreen extends Component {
    getWork = (id, works) => {
        let res = works.find(element => element.id === id);
        if (res === -1) {
            console.error("getWork: element not found");
        }
        return res;
    }

    render() {
        let work = this.getWork(
            parseInt(this.props.match.params.id),
            this.props.appContext.data.resume.projectExp);

        return (
            <Screen title={"Works"}>
                <WorkSummarySection data={work}/>
                <ImagesSection data={work}/>
                <DemoSection data={work}/>
            </Screen>
        );
    }
}

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <WorkDetailScreen
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));
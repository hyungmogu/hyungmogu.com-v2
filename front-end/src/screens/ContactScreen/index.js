import React, { Component } from 'react';
import { AppConsumer } from '../../components/Context';

import { Screen, H3 } from '../lib';

class ContactScreen extends Component {
    render() {
        let email = this.props.appContext.data.contact.email;
        let linkedIn = this.props.appContext.data.contact.linkedIn;
        let github = this.props.appContext.data.contact.github;

        return (
            <Screen title={"Contact"}>
                <H3>Hire Hyungmo!</H3>
                <ul>
                    <li>Email: <a href={"mailto:" + email}>{email}</a></li>
                    <li>LinkedIn: <a href={linkedIn.url}>{linkedIn.label}</a></li>
                    <li>Github: <a href={github.url}>{github.label}</a></li>
                </ul>
            </Screen>
        );
    }
}

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <ContactScreen
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));

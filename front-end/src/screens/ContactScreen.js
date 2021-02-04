import React, { Component } from 'react';
import { AppConsumer } from '../components/Context';

class ContactScreen extends Component {

    render() {
        console.log(this.props);
        let email = this.props.appContext.data.contact.email;
        let linkedIn = this.props.appContext.data.contact.linkedIn;
        let github = this.props.appContext.data.contact.github;

        return (
            <section className="content content-contacts">
                <header class="header--secondary p-6">
                    <h2>Contact</h2>
                </header>
                <div class="ml-4 mr-4">
                    <article class="p-6">
                        <h3>Hire Hyungmo!</h3>
                        <ul>
                            <li>Email: <a href={"mailto:" + email}>{email}</a></li>
                            <li>LinkedIn: <a href={linkedIn.url}>{linkedIn.label}</a></li>
                            <li>Github: <a href={github.url}>{github.label}</a></li>
                        </ul>
                    </article>
                </div>
            </section>
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

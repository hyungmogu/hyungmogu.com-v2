import React, { Component } from 'react';

class AboutScreen extends Component {

    render() {
        return (
            <section className="content content-contacts">
                <header class="header--secondary p-6">
                    <h2>About</h2>
                </header>
                <div class="ml-4 mr-4">
                    <article class="p-6">
                        <h3>Hire Hyungmo!</h3>
                        <ul>
                            <li>Email: <a href="mailto:ghyungmo@gmail.com">ghyungmo@gmail.com</a></li>
                            <li>Linked-In: <a href="https://www.linkedin.com/in/hyungmo-gu/">linkedin.com/in/hyungmo-gu/</a></li>
                            <li>Github: <a href="https://github.com/hyungmogu">github.com/hyungmogu</a></li>
                        </ul>
                    </article>
                </div>
            </section>
        );
    }
}

export default AboutScreen;


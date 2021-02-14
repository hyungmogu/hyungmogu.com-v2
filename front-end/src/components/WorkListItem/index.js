import React, { Component } from 'react';
import styled from 'styled-components';

import { NavLink, withRouter } from 'react-router-dom';

const Thumbnail = styled(NavLink)`
    margin: 0 1.5rem 1.5rem 1.5rem;
    text-align: center;
    text-decoration: none;
    color: black;

    cursor: pointer;
    img {
        margin-bottom: 1rem;
    }

    div {
        width: #{$thumbnail--width};
    }

    & > div {
        margin: 0 auto;
    }

    @media screen and (min-width: 930px) {
        text-align: inherit;
    }
`;

class WorkListItem extends Component {
    render() {
        let id = this.props.work.id;
        let image = this.props.work.headerImage;
        let date = this.props.work.date;
        let title = this.props.work.title;
        return (
            <Thumbnail to={`/works/${id}`}>
                <img src={image} alt="Work"/>
                <div>
                    <div class="small">{date}</div>
                    <h4>{title}</h4>
                </div>
            </Thumbnail>
        );
    }
};

export default withRouter(WorkListItem);

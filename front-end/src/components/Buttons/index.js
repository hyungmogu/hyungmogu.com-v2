import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

export function PrintButton(props) {
  const A = styled.a`
    background-color: white;
    padding: 1em;
    margin: 1.25em;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 5px 8px grey;
    position: fixed;
    right: 0;
    bottom: 0;
    font-size: 1.5em;
    text-decoration: none;
    color: inherit;
}
  `;

  return (
    <A rel="noreferrer" target="_blank" href={props.href}>
        <FontAwesomeIcon icon={faFilePdf} />
    </A>
  );
}

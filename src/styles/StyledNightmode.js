import styled from 'styled-components';

export default styled.div`
  font-weight: 800;
  font-size: 1.6rem;
  color: ${props => props.theme.color};
  padding: 0;
  margin: 1.25rem;

  .switch {
    position: relative;
    display: inline-block;
    width: 3.25rem;
    height: 1.5rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ccc;
    transition: 0.4s;
    -webkit-transistion: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 1rem;
    width: 1rem;
    left: 0.25rem;
    bottom: 0.25rem;
    background: #fff;
    transition: 0.4s;
    -webkit-transition: 0.4s;
  }

  input:checked + .slider {
    background: #3d5138;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(1rem);
    -ms-transform: translateX(1rem);
    transform: translateX(1rem);
  }

  .slider.round {
    border-radius: 1.9rem;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
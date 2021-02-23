import './index.css';
import Slider from '../components/Slider';

window.onload = () => {
  const slider = new Slider(
    document.querySelector('span.video__toggler-item_left'),
    document.querySelector('span.video__toggler-item_right'),
    document.querySelector('ul.video__videos'),
    document.querySelectorAll('li.video__videos-item'),
    2
  );
  slider.addListeners();
};

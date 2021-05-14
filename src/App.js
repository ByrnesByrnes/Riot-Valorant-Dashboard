import './styles/style.scss';
import { Ellipse,Dashboard } from './components';


export function App() {
  return (
    <>
      <Dashboard />
      {/* top */}
      <Ellipse size="70em" color="#FF4656" left="-10em" top="-25em" />
      <Ellipse size="1.5em" color="#FF4656" right="7em" top="4.6em" />
      <Ellipse size="8.5em" right="3.25em" top="9em" />
      <Ellipse size="3em" color="#505155" right="1.7em" top="18em" />
      {/* bottom  */}
      <Ellipse size="15em" bottom="-7.5em" left="10em" />
      <Ellipse size="2em" color ="#505155" bottom="6.5em" left="7.5em" />
      <Ellipse size="45em" color ="#292C31" right="-10%" bottom="-12.5em" />
    </>
  );
}

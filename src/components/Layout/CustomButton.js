import { useEffect,useState } from 'react';
import './CustomButton.css';

const CustomButton = (props) => {

  const [classList, setClassList] = useState("button");

  function onClickHandler() {
    props.func();
  }

  useEffect(() => {
    if (props.active) {
      setClassList('button');
    } else {
      setClassList("button inactive");
    }
  }, [props.active]);

  return (
    <button className={classList} onClick={onClickHandler}>
      {props.title}
    </button>
  );
};

export default CustomButton;
import * as React from "react";

interface OwnProps {
  message: string;
}

const reactEmotionally = (str: string): string => {
  const hello = str.match(/Hello.*/g);
  const goodbye = str.match(/Goodbye.*/g);
  return hello ? ";-)" : goodbye ? ";-(" : ";-0";
};

const Emotion = ({ message }: OwnProps) => {
  return (<div>
    <h2>Emotional Response: {reactEmotionally(message)}</h2>
    <div>{message}</div>
  </div>);
};

export default Emotion;

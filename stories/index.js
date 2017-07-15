import React from 'react';

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from '@storybook/react/demo';
import Emotion from "../src/components/emotion";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('FooBar', module)
  .add('Foobar with "Hello World" message', () => <Emotion message="Hello World"/>)
  .add('Foobar with "Goodbye World" message', () => <Emotion message="Goodbye World"/>);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

import { SyntheticEvent } from 'react';
import Code from 'babel-plugin-jsx-code/Component';
import Button from 'ynnub/components/Button';
import { FlexGrid, FlexItems } from 'ynnub/grid/flex';
import typography from 'ynnub/text/typography';
import { FaGoogle } from 'react-icons/fa';
import Layout, { RenderCode } from '../../components/Layout';

const onClick = (e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>) => {
  e.preventDefault();
  return false;
};

export default () => (
  <Layout>
    <h1 className={typography.headline}>Buttons</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre>
      <code>
        {`
import Button from 'ynnub/components/Button';
`.trim()}
      </code>
    </pre>

    <h2 className={typography.title}>Basic Button (Raised)</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap">
        <FlexItems padding="1rem">
          <Button label="Click me !" />
          <Button disabled label="Disabled" />
          <Button label="Icon" icon="favorite" />
          <Button label="Icon" icon={<FaGoogle />} />
          <Button icon="favorite" />
          <Button compact label="Compact" />
          <Button dense label="Dense" />
          <Button inProgress label="In progress" icon="favorite" />
        </FlexItems>
      </FlexGrid>
    </Code>

    <h2 className={typography.title}>Link Button</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap">
        <FlexItems padding="1rem">
          <Button href="#" label="Link to something" onClick={onClick} />
          <Button href="#" label="Icon" icon="favorite" onClick={onClick} />
          <Button compact href="#" label="Compact" onClick={onClick} />
          <Button dense href="#" label="Dense" onClick={onClick} />
          <Button
            compact
            dense
            href="#"
            label="Compact Dense"
            onClick={onClick}
          />
        </FlexItems>
      </FlexGrid>
    </Code>

    <h2 className={typography.title}>Flat Button</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap">
        <FlexItems padding="1rem">
          <Button flat label="Click me !" />
          <Button flat disabled label="Disabled" />
          <Button flat label="Icon" icon="favorite" />
          <Button flat label="Icon" icon={<FaGoogle />} />
          <Button icon="favorite" />
          <Button flat compact label="Compact" />
          <Button flat dense label="Dense" />
          <Button flat inProgress label="In progress" icon="favorite" />
        </FlexItems>
      </FlexGrid>
    </Code>
  </Layout>
);

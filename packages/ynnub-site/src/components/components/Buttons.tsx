import Code from 'babel-plugin-jsx-code/Component';
import Button from 'ynnub/components/Button';
import { FlexGrid, FlexItems } from 'ynnub/grid/flex';
import RenderCode from '../RenderCode';
import typography from 'ynnub/text/typography';
import GoogleIcon from 'react-icons/lib/fa/google';

export default () => (
  <div>
    <h1 className={typography.headline}>Buttons</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre><code>{`
import Button from 'ynnub/components/Button';
`.trim()}</code></pre>


    <h2 className={typography.title}>Basic Button (Raised)</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap">
        <FlexItems padding="1rem">
          <Button label="Click me !" />
          <Button label="Disabled" disabled />
          <Button label="Icon" icon="favorite" />
          <Button label="Icon" icon={<GoogleIcon />} />
          <Button icon="favorite" />
          <Button label="Compact" compact />
          <Button label="Dense" dense />
          <Button label="In progress" icon="favorite" inProgress />
          <Button label="Confirm (Doesn't work because not rehydrated)" confirm="Are you sure ?" />
        </FlexItems>
      </FlexGrid>
    </Code>

    <h2 className={typography.title}>Link Button</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap">
        <FlexItems padding="1rem">
          <Button href="#" onClick="return false" label="Link to something" />
          <Button href="#" onClick="return false" label="Icon" icon="favorite" />
          <Button href="#" onClick="return false" label="Compact" compact />
          <Button href="#" onClick="return false" label="Dense" dense />
          <Button href="#" onClick="return false" label="Compact Dense" compact dense />
        </FlexItems>
      </FlexGrid>
    </Code>

    <h2 className={typography.title}>Flat Button</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap">
        <FlexItems padding="1rem">
          <Button flat label="Click me !" />
          <Button flat label="Disabled" disabled />
          <Button flat label="Icon" icon="favorite" />
          <Button flat label="Icon" icon={<GoogleIcon />} />
          <Button icon="favorite" />
          <Button flat label="Compact" compact />
          <Button flat label="Dense" dense />
          <Button flat label="In progress" icon="favorite" inProgress />
          <Button flat label="Confirm (Doesn't work because not rehydrated)" confirm="Are you sure ?" />
        </FlexItems>
      </FlexGrid>
    </Code>
  </div>
)

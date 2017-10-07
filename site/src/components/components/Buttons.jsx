import Code from 'babel-plugin-jsx-code/Component';
import Button from 'ynnub/components/Button';
import { FlexGrid, FlexItems } from 'ynnub/grid/flex';
import RenderCode from '../RenderCode';
import typography from 'ynnub/text/typography';

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
          <Button label="Icon" icon="❤" />
          <Button label="Compact" compact />
          <Button label="Dense" dense />
        </FlexItems>
      </FlexGrid>
    </Code>

    <h2 className={typography.title}>Link Button</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap">
        <FlexItems padding="1rem">
          <Button href="#" onClick="return false" label="Link to something" />
          <Button href="#" onClick="return false" label="Icon" icon="❤" />
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
          <Button flat label="Flat" />
          <Button flat label="Disabled" disabled />
          <Button flat label="Icon" icon="❤" />
          <Button flat label="Compact" compact />
          <Button flat label="Dense" dense />
        </FlexItems>
      </FlexGrid>
    </Code>
  </div>
)

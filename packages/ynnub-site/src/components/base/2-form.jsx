import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import { Fieldset, InputText, Textarea, Select, Radio, Checkbox } from  'ynnub/form';
import typography from 'ynnub/text/typography';
import { FlexGrid, FlexItem } from 'ynnub/grid/flex';

export default () => (
  <div>
    <h1 className={typography.headline}>Form</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre><code>{"import { InputText, Textarea, Select, Radio, Checkbox, Fieldset } from  'ynnub/form';"}</code></pre>

    <h2 className={typography.title}>InputText</h2>

    <Code render={RenderCode}>
      <FlexGrid justifyContent="space-around" flow="row wrap">
        <FlexItem basis="45%">
          <InputText id="user-firstname" label="First Name" required />
        </FlexItem>
        <FlexItem basis="45%">
          <InputText id="user-lastname" label="Last Name" required />
        </FlexItem>
        <FlexItem basis="45%">
          <InputText
            id="user-email"
            type="email"
            label="Email"
            required
            placeholder="Email (Placeholder)"
          />
        </FlexItem>
        <FlexItem basis="45%">
          <InputText
            id="user-phone"
            type="phone"
            icon="phone"
            label="Phone"
            required
          />
        </FlexItem>
        <FlexItem basis="45%">
          <InputText id="user-disabled" label="Disabled" disabled />
        </FlexItem>
      </FlexGrid>
    </Code>


    <h2 className={typography.title}>Textarea</h2>

    <Code render={RenderCode}>
      <Textarea
        id="user-bio"
        style={{ height: '10rem' }}
        placeholder="Type anything you like here"
      />
    </Code>


    <h2 className={typography.title}>Select</h2>

    <Code render={RenderCode}>
      <Select
        id="select"
      >
        <option>Value1</option>
        <option>Value2</option>
        <option>Value3</option>
      </Select>
    </Code>

    <Code render={RenderCode}>
      <Select
        id="select"
        disabled
      >
        <option>Value1</option>
      </Select>
    </Code>


    <h2 className={typography.title}>Radio buttons</h2>

    <Code render={RenderCode}>
      <div>
        <Radio id="radio1" name="radiobutton" value="value1" label="Value 1" />
        <Radio id="radio2" name="radiobutton" value="value2" label="Value 2" />
        <Radio id="radio3" name="radiobutton" value="value3" label="Value 3" />
        <Radio id="radio4" name="radiobutton" value="value4" label="Value 4" />
      </div>
    </Code>

    <Code render={RenderCode}>
      <div>
        <Radio id="radiodisabled1" name="radiobutton-disabled" value="value1" label="Value 1" disabled checked />
        <Radio id="radiodisabled2" name="radiobutton-disabled" value="value2" label="Value 2" disabled />
      </div>
    </Code>


    <h2 className={typography.title}>Checkboxes</h2>

    <Code render={RenderCode}>
      <div>
        <Checkbox id="checkbox1" value="value1" label="Value 1" />
        <Checkbox id="checkbox2" value="value2" label="Value 2" />
        <Checkbox id="checkbox3" value="value3" label="Value 3" />
        <Checkbox id="checkbox4" value="value4" label="Value 4" />
      </div>
    </Code>

    <Code render={RenderCode}>
      <div>
        <Checkbox id="checkboxdisabled1" value="value1" label="Value 1" checked disabled />
        <Checkbox id="checkboxdisabled2" value="value2" label="Value 2" disabled />
      </div>
    </Code>

    <h2 className={typography.title}>Fieldset</h2>

    <Code render={RenderCode}>
      <div>
        <Fieldset legend="Fieldset 1">
          <InputText id="fieldsetinput" placeholder="Input 1"/>
          <InputText id="fieldsetinput2" placeholder="Input 2"/>
        </Fieldset>

        <Fieldset legend="Fieldset 2">
          <InputText id="fieldsetinput" placeholder="Input 1"/>
          <InputText id="fieldsetinput2" placeholder="Input 2"/>
        </Fieldset>
      </div>
    </Code>


    <h2 className={typography.title}>With <code>redux-form</code></h2>

    <pre><code>{`
import { InputText } from 'ynnub';
import { Field } from 'redux-form';

const renderInputText = (field) => (
  <InputText {...field.input} label="Firstname" />
);

export default () => (
  <Field name="firstname" component={renderInputText} />
);
`}</code></pre>
  </div>
)

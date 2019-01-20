import Code from 'babel-plugin-jsx-code/Component';
import typography from 'ynnub/text/typography';
import { FlexGrid, FlexItems, FlexItem } from 'ynnub/grid/flex';
import {
  Fieldset,
  InputText,
  Textarea,
  Select,
  Radio,
  Checkbox,
  RadioSelect,
} from '../../../ynnub/form';
import Layout, { RenderCode } from '../../components/Layout';

export default () => (
  <Layout>
    <h1 className={typography.headline}>Form</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre>
      <code>
        {
          "import { InputText, Textarea, Select, Radio, Checkbox, RadioSelect, Fieldset } from  'ynnub/form';"
        }
      </code>
    </pre>

    <h2 className={typography.title}>InputText</h2>

    <Code render={RenderCode}>
      <FlexGrid justifyContent="space-around" flow="row wrap">
        <FlexItem basis="45%">
          <InputText required id="user-firstname" label="First Name" />
        </FlexItem>
        <FlexItem basis="45%">
          <InputText required id="user-lastname" label="Last Name" />
        </FlexItem>
        <FlexItem basis="45%">
          <InputText
            required
            id="user-email"
            type="email"
            label="Email"
            placeholder="Email (Placeholder)"
          />
        </FlexItem>
        <FlexItem basis="45%">
          <InputText
            required
            id="user-phone"
            type="phone"
            icon="phone"
            label="Phone"
          />
        </FlexItem>
        <FlexItem basis="45%">
          <InputText disabled id="user-disabled" label="Disabled" />
        </FlexItem>
      </FlexGrid>
    </Code>

    <h2 className={typography.title}>Textarea</h2>

    <Code render={RenderCode}>
      <Textarea
        id="user-talents"
        style={{ height: '10rem' }}
        placeholder="Type anything you like here"
      />
    </Code>

    <Code render={RenderCode}>
      <Textarea
        label="Your biography"
        id="user-bio"
        style={{ height: '10rem' }}
        placeholder="Type anything you like here"
      />
    </Code>

    <h2 className={typography.title}>Select</h2>

    <Code render={RenderCode}>
      <FlexGrid withGutter>
        <FlexItems>
          <Select id="select">
            <option>Value1</option>
            <option>Value2</option>
            <option>Value3</option>
          </Select>

          <Select id="select" label="Select Label">
            <option>Value1</option>
            <option>Value2</option>
            <option>Value3</option>
          </Select>

          <Select id="select-withIcon" icon="favorite">
            <option>Value1</option>
            <option>Value2</option>
            <option>Value3</option>
          </Select>
        </FlexItems>
      </FlexGrid>
    </Code>

    <Code render={RenderCode}>
      <Select disabled id="select">
        <option>Value1</option>
      </Select>
    </Code>

    <h2 className={typography.title}>Radio buttons</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap">
        <RadioSelect
          name="radiobutton"
          label="Radio buttons"
          prefixId="radioselect"
        >
          <RadioSelect.Radio value="value1" label="Value 1" />
          <RadioSelect.Radio value="value2" label="Value 2" />
          <RadioSelect.Radio value="value3" label="Value 3" />
          <RadioSelect.Radio value="value4" label="Value 4" />
        </RadioSelect>
        <RadioSelect
          flex
          name="radiobuttonvertical"
          label="Vertical Radio buttons"
          prefixId="radioselectvertical"
        >
          <RadioSelect.Radio value="value1" label="Value 1" />
          <RadioSelect.Radio value="value2" label="Value 2" />
          <RadioSelect.Radio value="value3" label="Value 3" />
          <RadioSelect.Radio value="value4" label="Value 4" />
        </RadioSelect>
      </FlexGrid>
    </Code>

    <Code render={RenderCode}>
      <div>
        <Radio
          disabled
          checked
          id="radiodisabled1"
          name="radiobutton-disabled"
          value="value1"
          label="Value 1"
        />
        <Radio
          disabled
          id="radiodisabled2"
          name="radiobutton-disabled"
          value="value2"
          label="Value 2"
        />
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
        <Checkbox
          checked
          disabled
          id="checkboxdisabled1"
          value="value1"
          label="Value 1"
        />
        <Checkbox
          disabled
          id="checkboxdisabled2"
          value="value2"
          label="Value 2"
        />
      </div>
    </Code>

    <h2 className={typography.title}>Fieldset</h2>

    <Code render={RenderCode}>
      <div>
        <Fieldset legend="Fieldset 1">
          <InputText id="fieldsetinput" placeholder="Input 1" />
          <InputText id="fieldsetinput2" placeholder="Input 2" />
        </Fieldset>

        <Fieldset legend="Fieldset 2">
          <InputText id="fieldsetinput" placeholder="Input 1" />
          <InputText id="fieldsetinput2" placeholder="Input 2" />
        </Fieldset>
      </div>
    </Code>

    <h2 className={typography.title}>
      With <code>redux-form</code>
    </h2>

    <pre>
      <code>{`
import { InputText } from 'ynnub';
import { Field } from 'redux-form';

const renderInputText = (field) => (
  <InputText {...field.input} label="Firstname" />
);

export default () => (
  <Field name="firstname" component={renderInputText} />
);
`}</code>
    </pre>
  </Layout>
);

import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import { InputText, Textarea, Select, Radio, Checkbox } from  'ynnub/form';
import sHeadings from 'ynnub/text/headings.scss';
import sFlex from 'ynnub/grid/flex.scss';

export default () => (
  <div>
    <h1 className={sHeadings.pageTitle}>Form</h1>

    <h2 className={sHeadings.textTitle}>Imports</h2>

    <pre><code>{"import { InputText, Textarea, Select, Radio, Checkbox, Fieldset } from  'ynnub/form';"}</code></pre>

    <h2 className={sHeadings.textTitle}>InputText</h2>

    <Code render={RenderCode}>
      <div className={[sFlex.row, sFlex.spaceAround].join(' ')}>
        <div style={{ flexGrow: 0, width: '45%' }}>
          <InputText id="user-firstname" label="First Name" required />
        </div>
        <div style={{ flexGrow: 0, width: '45%' }}>
          <InputText id="user-lastname" label="Last Name" required />
        </div>
        <div style={{ flexGrow: 0, width: '45%' }}>
          <InputText
            id="user-email"
            type="email"
            label="Email"
            required
            placeholder="Email (Placeholder)"
          />
        </div>
        <div style={{ flexGrow: 0, width: '45%' }}>
          <InputText
            id="user-phone"
            type="phone"
            icon="☏"
            label="Phone"
            required
          />
        </div>
        <div style={{ flexGrow: 0, width: '45%' }}>
          <InputText id="user-disabled" label="Disabled" disabled />
        </div>
      </div>
    </Code>


    <h2 className={sHeadings.textTitle}>Textarea</h2>

    <Code render={RenderCode}>
      <Textarea
        id="user-bio"
        style={{ height: '10rem' }}
        placeholder="Type anything you like here"
      />
    </Code>


    <h2 className={sHeadings.textTitle}>Select</h2>

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


    <h2 className={sHeadings.textTitle}>Radio buttons</h2>

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


    <h2 className={sHeadings.textTitle}>Checkboxes</h2>

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

    <h2 className={sHeadings.textTitle}>Fieldset</h2>

    <Code render={RenderCode}>
      <Fieldset legend="Legend">
        <InputText id="fieldsetinput"/>
      </Fieldset>
    </Code>


    <h2 className={sHeadings.textTitle}>With <code>redux-form</code></h2>

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

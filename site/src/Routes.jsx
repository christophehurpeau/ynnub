import { Route, IndexRoute } from 'react-router';
import HomePage from './components/Home';
import typography from './components/base/1-typography';
import Layout from './components/base/2-layout';
import Form from './components/base/2-form';
import Paragraphs from './components/base/text/Paragraphs';
import Citations from './components/base/text/Citations';
import Code from './components/base/text/Code';
import Inline from './components/base/text/Inline';
import Badges from './components/components/Badges';
import Blocks from './components/components/Blocks';
import Buttons from './components/components/Buttons';
import Cards from './components/components/Cards';
import Dropdown from './components/components/Dropdown';
import Labels from './components/components/Labels';
import Lists from './components/components/Lists';
import Tables from './components/components/Tables';

export default () => (
  <Route path="/">
    <IndexRoute component={HomePage} />
    <Route path="base">
      <Route path="layout" components={Layout} />
      <Route path="text">
        <Route path="typography" components={typography} />
        <Route path="paragraphs" components={Paragraphs} />
        <Route path="citations" component={Citations} />
        <Route path="code" component={Code} />
        <Route path="inline" component={Inline} />
      </Route>
      <Route path="form" components={Form} />
    </Route>
    <Route path="components">
      <Route path="badges" component={Badges} />
      <Route path="blocks" component={Blocks} />
      <Route path="buttons" component={Buttons} />
      <Route path="cards" component={Cards} />
      <Route path="dropdown" component={Dropdown} />
      <Route path="labels" component={Labels} />
      <Route path="lists" component={Lists} />
      <Route path="tables" component={Tables} />
    </Route>
  </Route>
)

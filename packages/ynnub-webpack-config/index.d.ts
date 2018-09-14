import { Loader, RuleSetRule } from 'webpack';


interface CreateModuleRulesOptions {
  extractLoader: Loader,
  plugins: Array<any>,
  production: boolean,
  themeFile?: string,
  includePaths?: Array<string>,
  resolveLoader?: (loader: string) => string,
}


type CreateModuleRulesFn = (options: CreateModuleRulesOptions) => Array<RuleSetRule>;

declare const createModuleRules: CreateModuleRulesFn;

export { createModuleRules };

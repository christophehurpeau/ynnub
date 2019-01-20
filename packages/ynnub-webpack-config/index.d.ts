import { Loader, RuleSetRule } from 'webpack';


export interface CreateModuleRulesOptions {
  target: 'node' | 'modern-browser' | 'browser',
  extractLoader: Loader,
  plugins: Array<any>,
  production: boolean,
  themeFile?: string,
  includePaths?: Array<string>,
  resolveLoader?: (loader: string) => string,
}

export interface StylesCacheGroups {
  name: "styles",
  test: RegExp,
  chunks: "all",
  enforce: true
}


type CreateModuleRulesFn = (options: CreateModuleRulesOptions) => Array<RuleSetRule>;

declare const createModuleRules: CreateModuleRulesFn;
declare const stylesCacheGroups: StylesCacheGroups;

export { createModuleRules, stylesCacheGroups };

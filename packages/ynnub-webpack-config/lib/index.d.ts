import { Loader, RuleSetRule } from 'webpack';

type Target = 'node' | 'modern-browser' | 'browser';

export interface CreateCssModuleUseOptions {
  target: Target,
  extractLoader: Loader,
  global?: boolean,
  plugins: Array<any>,
  production: boolean,
  resolveLoader?: (loader: string) => string,
  otherLoaders?: Loader[],
}

export interface CreateModuleRulesOptions {
  target: Target,
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


type CreateCssModuleUseFn = (options: CreateCssModuleUseOptions) => RuleSetRule;
type CreateModuleRulesFn = (options: CreateModuleRulesOptions) => Array<RuleSetRule>;

declare const createCssModuleUse: CreateCssModuleUseFn;
declare const createModuleRules: CreateModuleRulesFn;
declare const stylesCacheGroups: StylesCacheGroups;

export { createCssModuleUse, createModuleRules, stylesCacheGroups };

// Type definitions for antd-dayjs-webpack-plugin 1.0
// Project: https://github.com/ant-design/antd-dayjs-webpack-plugin
// Definitions by: Lanzhi <https://github.com/lanzhi-lee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Compiler } from 'webpack';

/**
 * A webpack plugin for Day.js.
 * Replace Moment.js with Day.js in antd project in ONE step. Bundle size reduced from 65 kb -> 4.19 kb.
 * Configuration Detail: https://github.com/ant-design/antd-dayjs-webpack-plugin
 */
declare class AntdDayjsWebpackPlugin {
  constructor(options?: AntdDayjsWebpackPlugin.PluginOptions);

  /**
   * Apply the plugin
   */
  apply(compiler: Compiler): void;
}

declare namespace AntdDayjsWebpackPlugin {
  interface PluginOptions {
    /**
     * By default, the preset is 'antd'
     */
    preset?: 'antd' | 'antdv3';
    plugins?: string[];
    replaceMoment?: boolean;
  }
}

export = AntdDayjsWebpackPlugin;

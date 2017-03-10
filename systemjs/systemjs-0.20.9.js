/**
 * https://github.com/systemjs/systemjs
 */

/**
 * @type {SystemJS.constructor}
 */
var SystemJS;

/**
 * @typedef {*}
 */
SystemJS.Module;

/**
 * @typedef {{
 *   format: (string|undefined),
 *   exports: (string|undefined),
 *   deps: (Array<string>|undefined),
 *   globals: (Object<string, string>|undefined),
 *   loader: (string|undefined),
 *   sourceMap: (boolean|undefined),
 *   scriptLoad: (boolean|undefined),
 *   nonce: (string|undefined),
 *   integrity: (string|undefined),
 *   crossOrigin: (string|undefined),
 *   esModule: (boolean|undefined)
 * }}
 */
SystemJS.MetaConfig;

/**
 * @typedef {{
 *   main: (string|undefined),
 *   format: (string|undefined),
 *   defaultExtension: (string|boolean|undefined),
 *   map: (Object<string, string>|undefined),
 *   meta: (Object<string, SystemJS.MetaConfig>|undefined)
 * }}
 */
SystemJS.PackageConfig;

/**
 * @typedef {{
 *   baseURL: (string|undefined),
 *   bundles: (Object<string, Array<string>>|undefined),
 *   depCache: (Object<string, Array<string>>|undefined),
 *   map: (Object<string, string>|undefined),
 *   meta: (Object<string, SystemJS.MetaConfig>|undefined),
 *   packages: (Object<string, SystemJS.PackageConfig>|undefined),
 *   packageConfigPaths: (Array<string>|undefined),
 *   paths: (Object<string, string>|undefined),
 *   pluginFirst: (boolean|undefined),
 *   production: (boolean|undefined),
 *   transpiler: (string|undefined),
 *   warnings: (boolean|undefined),
 *   wasm: (boolean|undefined)
 * }}
 */
SystemJS.Config;

/**
 * @constructor
 */
SystemJS.constructor = function () {
};

SystemJS.constructor.prototype.amdDefine = function () {
};

SystemJS.constructor.prototype.amdRequire = function () {
};

/**
 * @param {SystemJS.Config} config
 */
SystemJS.constructor.prototype.config = function (config) {
};

/**
 * @returns {SystemJS.Config}
 */
SystemJS.constructor.prototype.getConfig = function () {
};

/**
 * @type {{
 *   set: function(string, SystemJS.Module): void,
 *   get: function(string): ?SystemJS.Module,
 *   has: function(string): boolean,
 *   delete: function(string): boolean,
 *   keys: function(): Iterator,
 *   values: function(): Iterator,
 *   entries: function(): Iterator
 * }|Iterator}
 */
SystemJS.constructor.prototype.registry;

/**
 * @param {string} moduleName
 * @param {string=} opt_normalizedParentName
 * @returns {Promise<SystemJS.Module>}
 */
SystemJS.constructor.prototype.import = function (moduleName, opt_normalizedParentName) {
};

/**
 * @param {*} object
 * @returns {boolean}
 */
SystemJS.constructor.prototype.isModule = function (object) {
};

/**
 * @param {*} object
 * @returns {SystemJS.Module}
 */
SystemJS.constructor.prototype.newModule = function (object) {
};

/**
 * @param {string} name
 * @param {Array<string>=} opt_deps
 * @param {Function=} opt_declare
 */
SystemJS.constructor.prototype.register = function (name, opt_deps, opt_declare) {
};

/**
 * @param {string} name
 * @param {Array<string>=} opt_deps
 * @param {boolean=} opt_executingRequire
 * @param {Function=} opt_declare
 */
SystemJS.constructor.prototype.registerDynamic = function (name, opt_deps, opt_executingRequire, opt_declare) {
};

/**
 * @param {string} moduleName
 * @param {string=} opt_parentName
 * @returns {Promise<string>}
 */
SystemJS.constructor.prototype.resolve = function (moduleName, opt_parentName) {
};

/**
 * @param {string} moduleName
 * @param {string=} opt_parentName
 * @returns {string}
 */
SystemJS.constructor.prototype.resolveSync = function (moduleName, opt_parentName) {
};

SystemJS.constructor.prototype._nodeRequire = function () {
};
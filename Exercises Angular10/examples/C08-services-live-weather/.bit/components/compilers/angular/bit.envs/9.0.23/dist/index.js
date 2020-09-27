"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.action = exports.getDynamicPackageDependencies = void 0;
require("@angular/compiler");
require("@angular/compiler-cli");
require("@angular/core");
require("@bazel/typescript");
require("typescript");
require("tslib");
require("tsickle/src/tsickle");
require("rxjs");
const ngPackagr = __importStar(require("ng-packagr"));
const path_1 = __importDefault(require("path"));
const debug_1 = __importDefault(require("debug"));
const fs = __importStar(require("fs"));
const tsconfig_1 = require("./tsconfig");
const bit_envs_compilers_utils_1 = require("@bit/bit.envs.compilers.utils");
if (process.env.DEBUG) {
    debug_1.default('build');
}
const DEV_DEPS = {
    tslib: '>=1.0.0',
    'webpack-env': '>=0.8.0',
    '@angular/core': '>= 8.0.0',
    '@angular/common': '>= 8.0.0',
};
const PKG_JSON_KEYS = [
    'es2015_ivy_ngcc',
    'es2015',
    'esm5',
    'esm2015',
    'fesm5',
    'fesm2015_ivy_ngcc',
    'fesm2015',
    'module',
    'typings',
    'metadata',
];
const DIST_DIRECTORY = 'dist';
function getDynamicPackageDependencies() {
    return {
        devDependencies: DEV_DEPS,
    };
}
exports.getDynamicPackageDependencies = getDynamicPackageDependencies;
function escapeRegExp(input) {
    return input.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function action(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        const { res, directory } = yield bit_envs_compilers_utils_1.createCapsule(ctx.context.isolate, { shouldBuildDependencies: true });
        const distDir = path_1.default.join(directory, 'dist');
        const componentObject = res.componentWithDependencies.component.toObject();
        const { files, mainFile } = componentObject;
        debug_1.default(`Building capsule in ${directory}`);
        let tests = bit_envs_compilers_utils_1.getTestFiles(files, []);
        let TS = Object.assign(tsconfig_1.TSConfig, {
            exclude: [...tsconfig_1.TSConfig.exclude, ...tests.map((s) => s.path)],
        });
        const TSFile = path_1.default.resolve(directory, 'tsconfig.json');
        yield fs.writeFileSync(TSFile, JSON.stringify(TS, null, 4));
        const ngPackageFile = path_1.default.resolve(directory, 'ng-package.json');
        const ngPackage = {
            dest: 'dist',
            lib: {
                entryFile: mainFile,
            },
            whitelistedNonPeerDependencies: [
                ...Object.keys(DEV_DEPS).map(escapeRegExp),
                ...Object.keys(componentObject.packageDependencies).map(escapeRegExp),
                escapeRegExp('@bit'),
            ],
        };
        if (!fs.existsSync(ngPackageFile)) {
            fs.writeFileSync(ngPackageFile, JSON.stringify(ngPackage, null, 4));
        }
        yield ngPackagr
            .ngPackagr()
            .forProject(ngPackageFile)
            .withTsConfig(TSFile)
            .build()
            .catch((e) => {
            console.error(e);
            throw e;
        });
        const dists = (yield bit_envs_compilers_utils_1.readFiles(distDir)) || [];
        const pkgJsonContent = require(path_1.default.resolve(distDir, 'package.json'));
        const packageJson = {};
        PKG_JSON_KEYS.forEach((k) => {
            if (k in pkgJsonContent) {
                packageJson[k] = path_1.default.join(DIST_DIRECTORY, pkgJsonContent[k]);
            }
        });
        bit_envs_compilers_utils_1.destroyCapsule(res.capsule);
        return {
            mainFile: pkgJsonContent.main,
            dists,
            packageJson,
        };
    });
}
exports.action = action;

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
exports.destroyCapsule = exports.createCapsule = exports.getCapsuleName = void 0;
const path = __importStar(require("path"));
const os = __importStar(require("os"));
const debug_1 = __importDefault(require("debug"));
if (process.env.DEBUG) {
    debug_1.default('capsule');
}
function getCapsuleName(infix = '') {
    const uuidHack = `capsule-${infix ? `${infix}-` : ''}${Date.now()
        .toString()
        .slice(-5)}`;
    return path.join(os.tmpdir(), 'bit', uuidHack);
}
exports.getCapsuleName = getCapsuleName;
function createCapsule(isolate, isolateOptions = {}, capsulePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const targetDir = capsulePath || getCapsuleName();
        debug_1.default(`\n building capsule on directory ${targetDir}`);
        const actualOpts = Object.assign({ targetDir, shouldBuildDependencies: true }, (isolateOptions || {}));
        const res = yield isolate(actualOpts);
        return { res, directory: targetDir };
    });
}
exports.createCapsule = createCapsule;
function destroyCapsule(capsule) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!process.env['DEBUG']) {
            yield capsule.destroy();
        }
    });
}
exports.destroyCapsule = destroyCapsule;

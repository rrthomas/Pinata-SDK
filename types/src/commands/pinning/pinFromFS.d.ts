import { PinataConfig } from '../../index.js';
import { PinataPinOptions, PinataPinResponse } from './pinFileToIPFS.js';
export declare function normalizePath(p: string, folderLevel?: number): string;
export default function pinFromFS(config: PinataConfig, sourcePath: string, options?: PinataPinOptions): Promise<PinataPinResponse>;

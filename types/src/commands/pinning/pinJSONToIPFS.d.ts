import { PinataConfig } from '../../index.js';
import { PinataPinOptions, PinataPinResponse } from './pinFileToIPFS.js';
export default function pinJSONToIPFS(config: PinataConfig, body: any, options?: PinataPinOptions): Promise<PinataPinResponse>;

import { PinataPinByHashPinOptions } from './commands/pinning/pinByHash.js';
import { PinataPinOptions } from './commands/pinning/pinFileToIPFS.js';
import { PinataPinJobsFilterOptions } from './commands/pinning/pinJobs/pinJobs.js';
import { PinataMetadata, PinataPinListFilterOptions } from './commands/data/pinList/pinList.js';
export interface PinataConfig {
    pinataApiKey?: string;
    pinataSecretApiKey?: string;
    pinataJWTKey?: string;
}
export declare class PinataClient {
    config: PinataConfig;
    constructor(pinataApiKey?: string | PinataConfig, pinataSecretApiKey?: string);
    pinByHash(hashToPin: string, options?: PinataPinByHashPinOptions): Promise<any>;
    hashMetadata(ipfsPinHash: string, metadata: PinataMetadata): Promise<any>;
    pinFileToIPFS(readableStream: any, options?: PinataPinOptions): Promise<import("./commands/pinning/pinFileToIPFS.js").PinataPinResponse>;
    pinFromFS(sourcePath: string, options?: PinataPinOptions): Promise<import("./commands/pinning/pinFileToIPFS.js").PinataPinResponse>;
    pinJSONToIPFS(body: any, options?: PinataPinOptions): Promise<import("./commands/pinning/pinFileToIPFS.js").PinataPinResponse>;
    pinJobs(filters?: PinataPinJobsFilterOptions): Promise<import("./commands/pinning/index.js").PinataPinJobsResponse>;
    unpin(hashToUnpin: string): Promise<unknown>;
    pinList(filters: PinataPinListFilterOptions): Promise<import("./commands/data/index.js").PinataPinListResponse>;
    getFilesByCount(filters: PinataPinListFilterOptions, maxCount?: number): {
        [Symbol.asyncIterator]: () => {
            next(): Promise<{
                value: import("./commands/data/index.js").PinataPin;
                done: boolean;
            }>;
            return(): Promise<{
                value: number;
                done: boolean;
            }>;
        };
    };
    testAuthentication(): Promise<import("./commands/data/testAuthentication.js").PinataTestAuthenticationResponse>;
    userPinnedDataTotal(): Promise<number>;
}
export * from './commands/data/index.js';
export * from './commands/pinning/index.js';
export default PinataClient;

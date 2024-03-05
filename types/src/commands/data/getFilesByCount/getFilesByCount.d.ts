import { PinataConfig } from '../../../index.js';
import { PinataPin, PinataPinListFilterOptions } from '../pinList/pinList.js';
export default function getFilesByCount(config: PinataConfig, filters?: PinataPinListFilterOptions, maxCount?: number): {
    [Symbol.asyncIterator]: () => {
        next(): Promise<{
            value: PinataPin;
            done: boolean;
        }>;
        return(): Promise<{
            value: number;
            done: boolean;
        }>;
    };
};

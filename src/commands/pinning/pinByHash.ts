import axios from 'axios';
import { baseUrl } from '../../constants.js';
import { createConfigForAxiosHeaders, validateMetadata } from '../../util/validators.js';
import isIPFS from 'is-ipfs';
import { handleError } from '../../util/errorResponse.js';
import { PinataConfig } from '../../index.js';
import { PinataOptions } from './pinFileToIPFS.js';
import { PinataMetadata } from '../data/pinList/pinList.js';

export interface PinataPinByHashPinOptions {
    pinataMetadata?: PinataMetadata;
    pinataOptions?: PinataOptions ;
}

export interface PinataPinByHashResponse {
    id: number | string;
    ipfsHash: string;
    status: string;
    name: string;
}

export default function pinByHash(config: PinataConfig, hashToPin: string, options: any): Promise<any> {
    if (!hashToPin) {
        throw new Error('hashToPin value is required for pinning by hash');
    }
    if (!isIPFS.cid(hashToPin)) {
        throw new Error('hashToPin value is an invalid IPFS CID');
    }

    const endpoint = `${baseUrl}/pinning/pinByHash`;
    const body : {
        hashToPin: any,
        pinataOptions: any,
        pinataMetadata?: any,
    } = {
        hashToPin: hashToPin,
        pinataOptions: {}
    };

    if (options) {
        if (options.pinataOptions) {
            body.pinataOptions = options.pinataOptions;
        }
        if (options.pinataMetadata) {
            validateMetadata(options.pinataMetadata);
            body.pinataMetadata = options.pinataMetadata;
        }
    }

    return new Promise((resolve, reject) => {
        axios.post(
            endpoint,
            body,
            {...createConfigForAxiosHeaders(config)})
        .then(function (result) {
            if (result.status !== 200) {
                reject(new Error(`unknown server response while adding to pin queue: ${result}`));
            }
            resolve(result.data);
        }).catch(function (error) {
            const formattedError = handleError(error);
            reject(formattedError);
        });
    });
}

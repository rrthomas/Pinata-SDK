import axios from 'axios';
import { baseUrl } from '../../constants.js';
import { createConfigForAxiosHeaders } from '../../util/validators.js';
import { handleError } from '../../util/errorResponse.js';
import { PinataConfig } from '../../index.js';

export default function userPinnedDataTotal(config: PinataConfig): Promise<number> {
    const endpoint = `${baseUrl}/data/userPinnedDataTotal`;

    return new Promise((resolve, reject) => {
        axios.get(
            endpoint,
            {...createConfigForAxiosHeaders(config)})
        .then(function (result) {
            if (result.status !== 200) {
                reject(new Error(`unknown server response while attempting to retrieve pinned data total: ${result}`));
            }
            resolve(result.data);
        }).catch(function (error) {
            const formattedError = handleError(error);
            reject(formattedError);
        });
    });
}

import { PinataConfig } from '../../index.js';
export interface PinataTestAuthenticationResponse {
    authenticated: boolean;
}
export default function testAuthentication(config: PinataConfig): Promise<PinataTestAuthenticationResponse>;

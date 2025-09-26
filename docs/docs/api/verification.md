---
title: IVerifyStream Interface
sidebar_title: IVerifyStream
summary: File signature verification result
---


# IVerifyStream Interface

The `IVerifyStream` interface describes the result returned after a file signature verification process. 

## Type Definition

```ts
interface IVerifyStream {
  /** Indicates whether the verification was successful. */
  ok: boolean;

  /** Error message if verification failed (optional). */
  error?: string;

  /** Optional verification session identifier. */
  session?: string;

  /** Verification status. */
  status: SignatureVerificationStatus;

  /** Type of CAdES signature (e.g., CAdES-BES, CAdES-T). */
  cadesType: string;

  /** Verification status of the certificate **/
  chainStatus: ChainStatusFlags;
}
```

👉 The `status` field uses the [**SignatureVerificationStatus**](verificationstatus.md) enumeration for standardized status values.

👉 The `chainStatus` field uses the [**ChainStatusFlags**](chainstatus.md) enumeration for standardized status values. 


## Example

```ts
const response: IVerifyStream =
  await window.pilotSignBridge?.verifyFile(signatureBase64, file);

if (response.ok) {
  console.log("Signature valid, type:", response.cadesType);
} else {
  console.error("Verification failed:", response.error);
}
``` 

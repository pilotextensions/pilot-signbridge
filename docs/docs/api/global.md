---
order: 0
title: Pilot-SignBridge Global API
sidebar_title: Global API
summary: Provides access to digital certificates, file signing, and signature verification through the browser’s window object.
---

# PilotSignBridge Global API

The `Pilot-SignBridge` API is exposed through the global `window` object.  
It provides methods for working with certificates, signing, and verifying files.  

## Type Definition

```ts
interface Window {
  pilotSignBridge?: {
    /** 
     * Returns the list of available certificates. 
     */
    getCerts: () => Promise<ICertificate[]>;

    /** 
     * Creates a detached signature for the given file using the specified
     * certificate. 
     * @param certThumbprint - The thumbprint of the certificate to use. 
     * @param file - The file contents as an ArrayBuffer. 
     * @returns Base64-encoded signature string. 
     */
    signFile: (certThumbprint: string, file: ArrayBuffer) => Promise<string>;

    /** 
     * Verifies a file against a detached signature. 
     * @param signatureBase64 - Base64-encoded signature string. 
     * @param file - The file contents as an ArrayBuffer. 
     * @returns Verification result object. 
     */
    verifyFile: (signatureBase64: string, file: ArrayBuffer) => Promise<any>;

    /** 
     * Returns the list of supported signature algorithms. 
     */
    getSupportedAlgorithms: () => Promise<string[]>;
  };
}
```

## Usage

### 1. Get Certificates

```ts
if (!window.pilotSignBridge) {
  console.error("Pilot-SignBridge is not available.");
  return;
}

const certs = await window.pilotSignBridge.getCerts();
if (certs.length > 0) {
  console.log("Available certificates:", certs);
  console.log("First cert thumbprint:", certs[0].Thumbprint);
}
```


### 2. Sign a File

```ts
if (!window.pilotSignBridge) {
  console.error("Pilot-SignBridge is not available.");
  return;
}

const arrayBuffer = new TextEncoder().encode("Hello, world!").buffer;
const certThumbprint = "ad296563ea27fff58c15fda728ce38914c9d5f5f";

const signedBase64 = await window.pilotSignBridge.signFile(certThumbprint, arrayBuffer);
console.log("Signed data:", signedBase64);
```


### 3. Verify a File

```ts
if (!window.pilotSignBridge) {
  console.error("Pilot-SignBridge is not available.");
  return;
}

const result = await window.pilotSignBridge.verifyFile(signBase64, file);
console.log("Verification result:", result);
```


### 4. Get Supported Algorithms

```ts
if (!window.pilotSignBridge) {
  console.error("Pilot-SignBridge is not available.");
  return;
}

const algorithms = await window.pilotSignBridge.getSupportedAlgorithms();
console.log("Supported algorithms:", algorithms);
```

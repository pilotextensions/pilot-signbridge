---
title: ICertificate interface
sidebar_title: ICertificate
---


# ICertificate Interface

The `ICertificate` interface describes the metadata of a digital certificate that can be retrieved using `window.pilotSignBridge.getCerts()`.  

## Type Definition

```ts
export interface ICertificate {
  /** Unique identifier of the certificate. */
  get Thumbprint(): string;

  /** Expiration date of the certificate (ISO 8601 string). */
  get ValidToDate(): string;

  /** Start date of the certificate validity (ISO 8601 string). */
  get ValidFromDate(): string;

  /** Issuer information (e.g., CA name). */
  get Issuer(): string;

  /** Full subject information (distinguished name). */
  get Subject(): string;

  /** Common name or friendly subject name. */
  get SubjectName(): string;

  /** Object Identifier (OID) of the public key algorithm. */
  get PublicKeyOid(): string;
}
```

## Example

```ts
const certs = await window.pilotSignBridge?.getCerts();

if (certs && certs.length > 0) {
  const cert: ICertificate = certs[0];
  console.log("Thumbprint:", cert.Thumbprint);
  console.log("Issuer:", cert.Issuer);
  console.log("Valid from:", cert.ValidFromDate, "to", cert.ValidToDate);
}
```

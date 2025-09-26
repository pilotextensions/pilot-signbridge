---
title: ChainStatusFlags Enum
sidebar_title: ChainStatusFlags
summary: Certificate chain verification status
---


The `ChainStatusFlags` enumeration defines possible outcomes of a certificate chain verification.  

## Definition

```ts
export enum ChainStatusFlags {
  /**
   * Specifies that the X509 chain has no errors.
   */
  NoError = 0,

  /**
   * Certificate is not valid due to an invalid time value (e.g., expired).
   */
  NotTimeValid = 1,

  /**
   * Deprecated. The CA and issued cert validity periods are not nested.
   */
  NotTimeNested = 2,

  /**
   * Certificate has been revoked.
   */
  Revoked = 4,

  /**
   * Certificate signature is invalid.
   */
  NotSignatureValid = 8,

  /**
   * Key usage is not valid.
   */
  NotValidForUsage = 0x10,

  /**
   * Certificate chain is invalid due to an untrusted root.
   */
  UntrustedRoot = 0x20,

  /**
   * Cannot determine revocation status (CRL offline/unavailable).
   */
  RevocationStatusUnknown = 0x40,

  /**
   * The X509 chain could not be built.
   */
  Cyclic = 0x80,

  /**
   * Invalid extension in certificate.
   */
  InvalidExtension = 0x100,

  /**
   * Invalid policy constraints.
   */
  InvalidPolicyConstraints = 0x200,

  /**
   * Invalid basic constraints.
   */
  InvalidBasicConstraints = 0x400,

  /**
   * Invalid name constraints.
   */
  InvalidNameConstraints = 0x800,

  /**
   * Certificate has an unsupported name constraint.
   */
  HasNotSupportedNameConstraint = 0x1000,

  /**
   * Certificate has an undefined name constraint.
   */
  HasNotDefinedNameConstraint = 0x2000,

  /**
   * Certificate has an impermissible name constraint.
   */
  HasNotPermittedNameConstraint = 0x4000,

  /**
   * Certificate has excluded a name constraint.
   */
  HasExcludedNameConstraint = 0x8000,

  /**
   * X509 chain could not be built up to the root.
   */
  PartialChain = 0x10000,

  /**
   * CTL is invalid due to time (e.g., expired).
   */
  CtlNotTimeValid = 0x20000,

  /**
   * CTL contains an invalid signature.
   */
  CtlNotSignatureValid = 0x40000,

  /**
   * CTL is not valid for this use.
   */
  CtlNotValidForUsage = 0x80000,

  /**
   * Online CRL is currently offline.
   */
  OfflineRevocation = 0x1000000,

  /**
   * No certificate policy extension present when required by policy.
   */
  NoIssuanceChainPolicy = 0x2000000,

  /**
   * Certificate is explicitly distrusted.
   */
  ExplicitDistrust = 0x4000000,

  /**
   * Certificate does not support a critical extension.
   */
  HasNotSupportedCriticalExtension = 0x8000000,

  /**
   * Certificate has a weak signature (e.g., MD2 or MD5).
   */
  HasWeakSignature = 0x100000,
}

```

## Usage Example

```ts
if (response.chainStatus === ChainStatusFlags.NoError) {
  console.log("The certificate is valid.");
} else if (response.chainStatus === ChainStatusFlags.Revoked) {
  console.warn("The certificate has been revoked.");
}
```

👉 This page integrates with the [IVerifyStream](verification.md) documentation.  

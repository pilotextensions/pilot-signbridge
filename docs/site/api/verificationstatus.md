---
title: SignatureVerificationStatus Enum
sidebar_title: SignatureVerificationStatus
summary: File signature verification status
---


<!-- # SignatureVerificationStatus Enum -->

The `SignatureVerificationStatus` enumeration defines possible outcomes of a file signature verification.  

## Definition

```ts
enum SignatureVerificationStatus {
  /** The signature is valid and matches the file. */
  Valid = 0,

  /** The signature is invalid or does not match the file. */
  Invalid = 1,

  /** An error occurred during the verification process. */
  Error = 2
}
```

## Usage Example

```ts
if (response.status === SignatureVerificationStatus.Valid) {
  console.log("The file signature is valid.");
} else if (response.status === SignatureVerificationStatus.Invalid) {
  console.warn("The file signature is invalid.");
} else {
  console.error("Verification failed due to an error.");
}
```

👉 This page integrates with the [IVerifyStream](verification.md) documentation.  

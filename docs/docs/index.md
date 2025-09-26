---
title: Pilot-SignBridge
sidebar_title: Home
summary: Secure digital signatures in your browser.
---

# Pilot-SignBridge

Bring secure **digital signatures** directly into your browser.  
Use your existing certificates to sign and verify files safely — no servers, no data leaks.  

![Pilot-SignBridge](signbridge.png)

## Installation

To use **Pilot-SignBridge**, you must install **both components**:

1. **Browser Extension**  
  [⬇️ Install from Chrome Web Store](https://chromewebstore.google.com/detail/pilot-signbridge/pmdljejbakkiijaijbbgndoaignbllfp). The extension connects your browser to the native signing app.  

2. **Windows Application**  
  [⬇️ Download PilotSignBridge.msi](https://github.com/pilotextensions/pilot-signbridge/releases/download/v1.0.0/PilotSignBridge.msi). This companion app communicates with your local cryptographic provider (e.g., CryptoPro). After installation, it runs in the background and handles signing/verification requests.  

3. **Pilot-Web Extension**  
  [⬇️ Download Pilot-Web Extension](https://github.com/pilotextensions/pilot-signbridge/releases/download/v1.0.0/cryptoprovider.pilot-signbridge.zip). This extension enables integration with the Pilot-Web Client for seamless signing operations.

⚠️ *Both the extension **and** the Windows app must be installed — the extension alone will not work.*  


## Get Started

<div style="display:flex; gap:1rem; margin:2rem 0;">
  <a href="https://chrome.google.com/webstore/detail/pilot-signbridge/pmdljejbakkiijaijbbgndoaignbllfp" 
     style="background:#2563eb; color:white; padding:1rem 2rem; border-radius:12px; text-decoration:none; font-weight:600; font-size:1.1rem;">
    Install Browser Extension
  </a>
  <a href="https://github.com/pilotextensions/pilot-signbridge/releases/download/v1.0.0/PilotSignBridge.msi" 
     style="background:#10b981; color:white; padding:1rem 2rem; border-radius:12px; text-decoration:none; font-weight:600; font-size:1.1rem;">
    Download Win App
  </a>
</div>


## Why Pilot-SignBridge?

- Works with your existing cryptographic provider  
- Keeps private keys **on your device**  
- Easy integration with web apps  


## Check Extension Installed

- [Run Extension Check](check-extension.md)  


## Documentation

- [Global API](api/global.md)  
- [Certificate Interface](api/certificate.md)  
- [Verification Response](api/verification.md)  
- [Verification Status](api/verificationstatus.md)  


💡 *Pilot-SignBridge is currently in **beta**. We’re improving every day — your feedback is welcome!*  

---
title: Check Extension
sidebar_title: Check Extension
summary: Verify that the Pilot-SignBridge extension is installed and functioning correctly.
beta: true
---

# Check Extension

When you open this page, the script below will automatically check if **Pilot-SignBridge** is available and display the result.

<div id="Extension-check-result" style="padding: 1em; border: 1px solid #ccc; border-radius: 8px; margin-top: 1em;">
  Checking Extension...
</div>

<div id="cert-list"></div>

<script>
document.addEventListener("DOMContentLoaded", async () => {
  const resultBox = document.getElementById("Extension-check-result");
  const certList = document.getElementById("cert-list");

  if (!window.pilotSignBridge) {
    resultBox.style.color = "red";
    resultBox.textContent = "❌ Pilot-SignBridge is not detected. Please install or enable it.";
    return;
  }

  resultBox.style.color = "green";
  resultBox.textContent = "✅ Pilot-SignBridge is available!";

  try {
    const certs = await window.pilotSignBridge.getCerts();
    if (certs.length > 0) {
      resultBox.textContent += ` Found ${certs.length} certificate(s).`;

      // Build a list of certificates
      let list = "<ul style='margin-top:1em;'>";
      certs.forEach(cert => {
        list += `<li style='margin-bottom:0.5em;'>
          <strong>${cert.SubjectName || cert.Subject}</strong><br/>
          Thumbprint: <code>${cert.Thumbprint}</code><br/>
          Valid: ${cert.ValidFromDate} → ${cert.ValidToDate}
        </li>`;
      });
      list += "</ul>";

      certList.innerHTML = list;
    } else {
      resultBox.textContent += " No certificates found.";
    }
  } catch (err) {
    resultBox.style.color = "orange";
    resultBox.textContent = "⚠️ Extension detected, but error retrieving certificates: " + err.message;
  }
});
</script>

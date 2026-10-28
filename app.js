/*
  CBL.Barber starter configuration
  1) Set BARBER_WHATSAPP to your WhatsApp number in international format, digits only.
     South Africa example: 27821234567 (not +27, no spaces, no leading 0).
  2) Set BARBER_MAP_QUERY to your public shop address or area.
  3) Edit the services/prices in index.html to match your real prices.
*/
const BARBER_WHATSAPP = "27602455980";
const BARBER_MAP_QUERY = "CBL Barber, Bloemfontein, Free State, South Africa";

const waNumberReady = /^\d{10,15}$/.test(BARBER_WHATSAPP) && !BARBER_WHATSAPP.includes("YOUR");
const waLink = (message = "Hi CBL.Barber, I'd like to ask about booking a haircut.") => {
  if (!waNumberReady) return "#";
  return `https://wa.me/${BARBER_WHATSAPP}?text=${encodeURIComponent(message)}`;
};
function setChatLink(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = waLink();
  el.addEventListener("click", e => {
    if (!waNumberReady) { e.preventDefault(); waLink(); }
  });
}
["chatTop", "chatBottom"].forEach(setChatLink);

const mapBtn = document.getElementById("mapBtn");
mapBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BARBER_MAP_QUERY)}`;
document.getElementById("year").textContent = new Date().getFullYear();

const dateInput = document.getElementById("date");
const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0,10);
dateInput.min = localDate;

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("clientName").value.trim();
  const service = document.getElementById("service").value;
  const date = dateInput.value;
  const time = document.getElementById("time").value;
  const serviceLocation = document.getElementById("serviceLocation").value;
  const clientArea = document.getElementById("clientArea").value.trim();
  const notes = document.getElementById("notes").value.trim();
  const message = `Hi CBL.Barber! I'd like to request a booking.\nName: ${name}\nService: ${service}\nPreferred date: ${date}\nPreferred time: ${time}\nService location: ${serviceLocation}${clientArea ? `\nArea / meeting location: ${clientArea}` : ""}${notes ? `\nExtra details: ${notes}` : ""}\nPlease let me know if this time is available and whether any travel fee or deposit applies.`;
  if (!waNumberReady) { alert("Check the WhatsApp number configured in app.js."); return; }
  window.open(waLink(message), "_blank", "noopener");
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(console.error));
}
let deferredPrompt;
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredPrompt = event;
  const btn = document.getElementById("installBtn");
  btn.classList.remove("hidden");
  btn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    btn.classList.add("hidden");
  }, { once: true });
});

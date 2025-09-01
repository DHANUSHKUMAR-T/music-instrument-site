// Handles card click navigation to instrument pages
function goToInstrument(instrumentName) {
    // This assumes you have pages like piano.html, drum.html inside /instruments
    window.location.href = `instruments/${instrumentName}.html`;
  }
  
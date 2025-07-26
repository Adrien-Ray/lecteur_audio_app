export function customPrompt(question) {
  return new Promise(resolve => {
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div class="popup_backdrop">
        <div class="popup_window">
          <p>${question}</p>
          <input type="text" id="response" />
          <button id="ok">OK</button>
          <button id="cancel">Annuler</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('#ok').onclick = () => {
      const value = modal.querySelector('#response').value;
      document.body.removeChild(modal);
      resolve(value);
    };
    modal.querySelector('#cancel').onclick = () => {
      document.body.removeChild(modal);
      resolve(null);
    };
    window.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
          try {
            document.body.removeChild(modal);
            resolve(null);
          } catch (error) {
            
          }
        }
    })
  });
}
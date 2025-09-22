// אתחול אחרי טעינת ה־DOM (בגלל defer אפשר גם בלי, אבל זה ברור)
document.addEventListener('DOMContentLoaded', () => {
  // --- בחירת אלמנטים ---
  const paletteEl = document.getElementById('palette');
  const canvasEl  = document.getElementById('canvas');
  const eraserBtn = document.getElementById('eraser');
  const clearBtn  = document.getElementById('clear');
  const sizeInput = document.getElementById('size');
  const applySize = document.getElementById('applySize');

  // --- צבעים לפלטה ---
  const COLORS = [
    '#000000','#4b5563','#7c3aed','#2563eb','#059669','#16a34a',
    '#f59e0b','#ef4444','#ea580c','#a855f7','#14b8a6','#22c55e',
    '#f97316','#eab308','#ef4444','#dc2626','#fde047','#84cc16',
    '#10b981','#06b6d4','#3b82f6','#6366f1','#8b5cf6','#ec4899'
  ];

  let currentColor = COLORS[0]; // צבע לציור
  let isDrawing = false;        // האם גוררים/לוחצים כרגע

  // --- בניית פלטת צבעים ---
  function buildPalette(){
    paletteEl.innerHTML = '';
    COLORS.forEach((hex, i) => {
      const btn = document.createElement('button');
      btn.className = 'swatch';
      btn.style.background = hex;
      btn.title = hex;
      if(i === 0) btn.setAttribute('aria-current','true');
      btn.addEventListener('click', () => {
        currentColor = hex;
        // עדכון סימון הצבע הנבחר
        [...paletteEl.children].forEach(c => c.removeAttribute('aria-current'));
        btn.setAttribute('aria-current','true');
      });
      paletteEl.appendChild(btn);
    });
  }

  // --- בניית הקנבס (size x size) ---
  function buildCanvas(size = 16){
    document.documentElement.style.setProperty('--size', size);
    canvasEl.innerHTML = '';
    const total = size * size;
    const frag = document.createDocumentFragment();
    for(let i=0;i<total;i++){
      const cell = document.createElement('div');
      cell.className = 'cell';
      frag.appendChild(cell);
    }
    canvasEl.appendChild(frag);
  }

  // --- צביעת תא בודד ---
  function paintCell(target, color){
    if(!target || !target.classList.contains('cell')) return;
    target.style.background = color;
  }

  // --- אירועי ציור ---
  canvasEl.addEventListener('mousedown', (e) => {
    isDrawing = true;
    paintCell(e.target, currentColor);
    e.preventDefault();
  });

  canvasEl.addEventListener('mouseover', (e) => {
    if(!isDrawing) return;
    paintCell(e.target, currentColor);
  });

  document.addEventListener('mouseup', () => { isDrawing = false; });
  canvasEl.addEventListener('mouseleave', () => { isDrawing = false; });

  // --- מחק (צבע לבן) ---
  eraserBtn.addEventListener('click', () => {
    currentColor = '#ffffff';
    // מסיר הדגשה מפלטת הצבעים (כי אנחנו במחק)
    [...paletteEl.children].forEach(c => c.removeAttribute('aria-current'));
  });

  // --- ניקוי כל הקנבס ---
  clearBtn.addEventListener('click', () => {
    [...canvasEl.children].forEach(cell => cell.style.background = '#ffffff');
  });

  // --- שינוי גודל הרשת ---
  applySize.addEventListener('click', () => {
    const n = Math.max(4, Math.min(48, Number(sizeInput.value) || 16));
    buildCanvas(n);
  });

  // --- אתחול ראשוני ---
  buildPalette();
  buildCanvas(16);
});

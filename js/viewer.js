(() => {
  const canvas = document.querySelector('#model-canvas');
  const models = window.portfolioModels;
  if (!canvas || !models) return;
  const context = canvas.getContext('2d');
  if (!context) return;
  const select = document.querySelector('#model-select');
  const download = document.querySelector('#model-download');
  const status = document.querySelector('#model-status');
  // Keep layout independent of the bitmap, including while cached CSS is loading.
  canvas.style.display = 'block';
  canvas.style.width = '100%';
  canvas.style.height = 'clamp(300px, 55vw, 540px)';
  let vertices, yaw, pitch, zoom, panX, panY;
  let scheduled = false;
  const pointers = new Map();
  let pinchDistance = 0;

  function reset() {
    yaw = -.5; pitch = -.65; zoom = 1; panX = 0; panY = 0;
    drawSoon();
  }

  function load() {
    const model = models[Number(select.value)];
    const min = [Infinity, Infinity, Infinity];
    const max = [-Infinity, -Infinity, -Infinity];
    model.vertices.forEach((value, i) => {
      const axis = i % 3;
      min[axis] = Math.min(min[axis], value);
      max[axis] = Math.max(max[axis], value);
    });
    const size = Math.max(...max.map((value, i) => value - min[i])) || 1;
    vertices = model.vertices.map((value, i) => (value - (min[i % 3] + max[i % 3]) / 2) / size);
    download.href = `models/${model.slug}.stl`;
    download.textContent = `Download ${model.name} STL`;
    canvas.setAttribute('aria-label', `Interactive 3D view of ${model.name}`);
    status.textContent = `${model.name} · ${(vertices.length / 9).toLocaleString()} triangles`;
    reset();
  }

  function drawSoon() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; draw(); });
  }

  function draw() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height || !vertices) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2, 2048 / width, 2048 / height);
    const bitmapWidth = Math.max(1, Math.round(width * ratio));
    const bitmapHeight = Math.max(1, Math.round(height * ratio));
    // Reallocating the bitmap on every frame wastes memory and can cause crashes.
    if (canvas.width !== bitmapWidth) canvas.width = bitmapWidth;
    if (canvas.height !== bitmapHeight) canvas.height = bitmapHeight;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.fillStyle = '#101d32';
    context.fillRect(0, 0, width, height);
    const scale = Math.min(width, height) * .7 * zoom;
    const cy = Math.cos(yaw), sy = Math.sin(yaw);
    const cp = Math.cos(pitch), sp = Math.sin(pitch);
    const points = [];
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i], y = vertices[i + 1], z = vertices[i + 2];
      const rx = x * cy - y * sy;
      const ry = x * sy + y * cy;
      points.push([rx, ry * cp - z * sp, ry * sp + z * cp]);
    }
    const faces = [];
    for (let i = 0; i < points.length; i += 3) {
      const a = points[i], b = points[i + 1], c = points[i + 2];
      const u = b.map((v, j) => v - a[j]);
      const v = c.map((value, j) => value - a[j]);
      const normal = [u[1]*v[2]-u[2]*v[1], u[2]*v[0]-u[0]*v[2], u[0]*v[1]-u[1]*v[0]];
      const length = Math.hypot(...normal) || 1;
      const light = Math.abs((normal[0]*-.3 + normal[1]*-.5 + normal[2]*.8) / length);
      faces.push({a, b, c, depth: (a[2]+b[2]+c[2])/3, light});
    }
    // Draw distant triangles first for an orthographic CAD-style view.
    faces.sort((a, b) => a.depth - b.depth);
    for (const face of faces) {
      context.beginPath();
      [face.a, face.b, face.c].forEach((point, i) => {
        const x = width / 2 + panX * width + point[0] * scale;
        const y = height / 2 + panY * height - point[1] * scale;
        if (i === 0) context.moveTo(x, y); else context.lineTo(x, y);
      });
      context.closePath();
      context.fillStyle = `hsl(213, 58%, ${36 + face.light * 38}%)`;
      context.fill();
    }
  }

  function changeZoom(factor) { zoom = Math.max(.3, Math.min(6, zoom * factor)); drawSoon(); }
  select.addEventListener('change', load);
  document.querySelector('#viewer-controls').hidden = false;
  document.querySelector('#viewer-controls').addEventListener('click', event => {
    const action = event.target.closest('button')?.dataset.action;
    if (action === 'reset') reset();
    if (action === 'in') changeZoom(1.2);
    if (action === 'out') changeZoom(1 / 1.2);
    if (action === 'left') { yaw -= .15; drawSoon(); }
    if (action === 'right') { yaw += .15; drawSoon(); }
  });
  canvas.addEventListener('wheel', event => {
    // Require focus so scrolling the page does not unexpectedly zoom the model.
    if (document.activeElement !== canvas) return;
    event.preventDefault();
    changeZoom(Math.exp(-event.deltaY * .001));
  }, {passive: false});
  canvas.addEventListener('pointerdown', event => {
    canvas.focus({preventScroll: true});
    canvas.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, {x: event.clientX, y: event.clientY});
    pinchDistance = 0;
  });
  canvas.addEventListener('pointermove', event => {
    const previous = pointers.get(event.pointerId);
    if (!previous) return;
    const dx = event.clientX - previous.x, dy = event.clientY - previous.y;
    pointers.set(event.pointerId, {x: event.clientX, y: event.clientY});
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchDistance > 0) changeZoom(distance / pinchDistance);
      pinchDistance = distance;
      panX += dx / canvas.clientWidth / 2;
      panY += dy / canvas.clientHeight / 2;
    } else if (event.shiftKey || event.buttons === 2) {
      panX += dx / canvas.clientWidth; panY += dy / canvas.clientHeight;
    } else { yaw += dx * .01; pitch += dy * .01; }
    drawSoon();
  });
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) {
    canvas.addEventListener(type, event => { pointers.delete(event.pointerId); pinchDistance = 0; });
  }
  canvas.addEventListener('contextmenu', event => event.preventDefault());
  canvas.addEventListener('keydown', event => {
    const arrows = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (arrows.includes(event.key)) {
      event.preventDefault();
      const dx = event.key === 'ArrowLeft' ? -1 : event.key === 'ArrowRight' ? 1 : 0;
      const dy = event.key === 'ArrowUp' ? -1 : event.key === 'ArrowDown' ? 1 : 0;
      if (event.shiftKey) { panX += dx * .04; panY += dy * .04; }
      else { yaw += dx * .12; pitch += dy * .12; }
      drawSoon();
    }
    if (event.key === '+' || event.key === '=') { event.preventDefault(); changeZoom(1.2); }
    if (event.key === '-') { event.preventDefault(); changeZoom(1 / 1.2); }
    if (event.key === 'Home') { event.preventDefault(); reset(); }
  });
  // Observe the container rather than feeding bitmap changes back into resizing.
  if (window.ResizeObserver) new ResizeObserver(drawSoon).observe(canvas.parentElement);
  window.addEventListener('resize', drawSoon);
  load();
})();

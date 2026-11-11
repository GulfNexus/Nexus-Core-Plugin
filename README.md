* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Inter, 'Segoe UI', sans-serif;
  background: #0b1020;
  color: #edf2ff;
}

.popup-body {
  min-width: 360px;
  min-height: 480px;
}

.popup-shell {
  padding: 18px;
}

.popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.eyebrow {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.7;
}

.popup-header h1 {
  margin: 4px 0 0;
  font-size: 26px;
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #36d399;
  box-shadow: 0 0 12px rgba(54, 211, 153, 0.9);
}

.settings-panel,
.quick-actions,
.result-box {
  display: grid;
  gap: 14px;
}

label {
  display: grid;
  gap: 8px;
  font-size: 12px;
  color: #c7d2fe;
}

input,
select,
button,
textarea {
  font: inherit;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 10px;
  background: rgba(15, 23, 42, 0.9);
  color: #edf2ff;
  padding: 10px 12px;
}

textarea {
  min-height: 110px;
  resize: vertical;
}

button {
  border: none;
  border-radius: 10px;
  padding: 10px 14px;
  cursor: pointer;
  transition: transform 0.1s ease, opacity 0.1s ease;
}

button:hover {
  transform: translateY(-1px);
}

.primary-btn {
  background: linear-gradient(135deg, #4f46e5, #8b5cf6);
  color: white;
}

.secondary-btn {
  background: rgba(148, 163, 184, 0.12);
  color: #e2e8f0;
}

.result-box {
  margin-top: 18px;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 12px;
  padding: 12px;
}

.result-box h2 {
  margin: 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.8;
}

.result-text {
  font-size: 13px;
  line-height: 1.5;
  color: #dbeafe;
  white-space: pre-wrap;
}

.nexus-ai-agent-button {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 2147483647;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #8b5cf6);
  color: white;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(79, 70, 229, 0.4);
}

.nexus-ai-agent-panel {
  position: fixed;
  right: 90px;
  bottom: 22px;
  z-index: 2147483647;
  width: min(360px, calc(100vw - 28px));
  max-height: 420px;
  background: rgba(15, 23, 42, 0.96);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 16px;
  box-shadow: 0 18px 36px rgba(2, 6, 23, 0.5);
  padding: 12px;
  display: none;
}

.nexus-ai-agent-panel.visible {
  display: block;
}

.nexus-ai-agent-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  margin-bottom: 10px;
}

.nexus-close {
  background: transparent;
  color: #e2e8f0;
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 8px;
}

.nexus-actions {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.nexus-action {
  flex: 1;
  background: rgba(99, 102, 241, 0.2);
  color: white;
}

.nexus-result {
  margin-top: 12px;
  max-height: 180px;
  overflow: auto;
  line-height: 1.5;
  color: #dbeafe;
  white-space: pre-wrap;
  font-size: 13px;
}

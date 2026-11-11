<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nexus AI Agent</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body class="popup-body">
    <div class="popup-shell">
      <header class="popup-header">
        <div>
          <div class="eyebrow">AI Browsing</div>
          <h1>Nexus AI</h1>
        </div>
        <span class="status-dot"></span>
      </header>

      <section class="settings-panel">
        <label>
          <span>OpenAI API Key</span>
          <input id="api-key" type="password" placeholder="sk-..." />
        </label>

        <label>
          <span>Model</span>
          <select id="model">
            <option value="gpt-4o-mini">gpt-4o-mini</option>
            <option value="gpt-4o">gpt-4o</option>
            <option value="gpt-4.1-mini">gpt-4.1-mini</option>
          </select>
        </label>

        <label>
          <span>Provider Endpoint</span>
          <input id="endpoint" type="text" value="https://api.openai.com/v1/chat/completions" />
        </label>
      </section>

      <section class="quick-actions">
        <button id="save-settings" class="primary-btn" type="button">Save Settings</button>
        <button id="summarize-page" class="secondary-btn" type="button">Summarize Page</button>
      </section>

      <section class="result-box">
        <h2>AI Response</h2>
        <div id="result" class="result-text">Ready.</div>
      </section>
    </div>

    <script src="popup.js"></script>
  </body>
</html>

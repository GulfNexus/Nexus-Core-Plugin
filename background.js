const DEFAULT_SETTINGS = {
  apiKey: '',
  model: 'gpt-4o-mini',
  endpoint: 'https://api.openai.com/v1/chat/completions',
  enabled: true,
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(DEFAULT_SETTINGS, (result) => {
    chrome.storage.local.set({ ...DEFAULT_SETTINGS, ...result });
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_SETTINGS') {
    chrome.storage.local.get(DEFAULT_SETTINGS, (settings) => sendResponse(settings));
    return true;
  }

  if (message.type === 'SAVE_SETTINGS') {
    chrome.storage.local.set(message.settings, () => sendResponse({ ok: true }));
    return true;
  }

  if (message.type === 'ASK_AI') {
    askAI(message.payload)
      .then((response) => sendResponse({ ok: true, result: response }))
      .catch((error) => sendResponse({ ok: false, error: error.message }));
    return true;
  }

  return false;
});

async function askAI({ prompt, model, apiKey, endpoint }) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.3,
      messages: [
        {
          role: 'system',
          content: 'You are a helpful AI assistant embedded in a browser extension. Answer clearly and concisely.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || 'Request failed while contacting the AI provider.');
  }

  return data.choices?.[0]?.message?.content?.trim() || 'No response generated.';
}

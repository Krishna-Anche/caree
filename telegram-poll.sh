#!/bin/bash
# Telegram polling for career-ops
# Checks for: button presses + file uploads (resume PDFs)

BOT_TOKEN="8230578946:AAESFPGMRqdGfoVKf08w28_0gfYChtS0wpw"
CHAT_ID="7742575539"
API="https://api.telegram.org/bot${BOT_TOKEN}"
OFFSET_FILE="/tmp/career-ops-telegram-offset"
RESUME_DIR="/Users/krishna/career/career-ops/word-templates"

# Get last offset
OFFSET=0
if [ -f "$OFFSET_FILE" ]; then
  OFFSET=$(cat "$OFFSET_FILE")
fi

# Poll for updates (callback_query + message for file uploads)
RESPONSE=$(curl -s "${API}/getUpdates?offset=${OFFSET}&timeout=5&allowed_updates=%5B%22callback_query%22%2C%22message%22%5D")

echo "$RESPONSE" | python3 -c "
import sys, json, urllib.request, urllib.parse, os, ssl

ctx = ssl.create_default_context()
try:
    ctx.load_default_certs()
except:
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

data = json.load(sys.stdin)
if not data.get('ok') or not data.get('result'):
    sys.exit(0)

for update in data['result']:
    offset = update['update_id'] + 1
    with open('$OFFSET_FILE', 'w') as f:
        f.write(str(offset))

    # Handle callback queries (button presses)
    cb = update.get('callback_query')
    if cb:
        cb_id = cb['id']
        cb_data = cb.get('data', '')
        parts = cb_data.split(':')
        if len(parts) >= 3:
            action = parts[0]
            company = parts[1]
            job_id = parts[2]
            answer_map = {
                'apply': '✅ Queued for application!',
                'skip': '❌ Skipped',
                'submit': '🚀 Submitting...',
                'edit': '✏️ Edit requested',
                'cancel': '❌ Cancelled'
            }
            answer_text = urllib.parse.quote(answer_map.get(action, 'OK'))
            try:
                urllib.request.urlopen(f'$API/answerCallbackQuery?callback_query_id={cb_id}&text={answer_text}', context=ctx)
            except:
                pass
            print(f'{action}|{company}|{job_id}')
        continue

    # Handle file uploads (resume/cover letter PDFs)
    msg = update.get('message', {})
    doc = msg.get('document')
    if doc and msg.get('chat', {}).get('id') == $CHAT_ID:
        file_name = doc.get('file_name', '')
        if file_name.lower().endswith('.pdf'):
            file_id = doc['file_id']
            # Get file path from Telegram
            try:
                file_info = json.loads(urllib.request.urlopen(f'$API/getFile?file_id={file_id}', context=ctx).read())
                if file_info.get('ok'):
                    file_path = file_info['result']['file_path']
                    download_url = f'https://api.telegram.org/file/bot$BOT_TOKEN/{file_path}'
                    # Download the file
                    save_path = '$RESUME_DIR/Sai_Krishna_Resume.pdf'
                    urllib.request.urlretrieve(download_url, save_path)
                    print(f'resume_uploaded|{file_name}|{save_path}')
            except Exception as e:
                print(f'upload_error|{file_name}|{str(e)}')
" 2>/dev/null

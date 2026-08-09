document.getElementById('admin-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('topic-id').value.trim();
    const title = document.getElementById('topic-title').value.trim();
    const description = document.getElementById('description').value.trim();
    const objectives = document.getElementById('objectives').value
        .split('\n')
        .map(item => item.trim())
        .filter(Boolean);
    const keyPoints = document.getElementById('key-points').value
        .split('\n')
        .map(item => item.trim())
        .filter(Boolean);
    const note = document.getElementById('note').value.trim();
    const codeSnippet = document.getElementById('code-snippet').value;

    const formattedOutput = `    {
        id: "${id}",
        title: "${title}",
        description: "${description}",
        objectives: ${JSON.stringify(objectives, null, 8)},
        keyPoints: ${JSON.stringify(keyPoints, null, 8)},
        note: "${note}",
        codeSnippet: \`${codeSnippet.replace(/`/g, '\\`').trim()}\`
    },`;

    document.getElementById('json-output').textContent = formattedOutput;
    document.getElementById('output-section').style.display = 'block';
});

function copyToClipboard() {
    const codeText = document.getElementById('json-output').textContent;
    navigator.clipboard.writeText(codeText);
    alert('Code block copied successfully! Go paste it into js/course-data.js');
}

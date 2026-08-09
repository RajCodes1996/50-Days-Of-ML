document.addEventListener('DOMContentLoaded', () => {
    const sidebarList = document.getElementById('lesson-list');

    courseData.forEach((topic, index) => {
        const li = document.createElement('li');
        li.textContent = topic.title;
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => loadTopic(topic.id));
        if (index === 0) li.classList.add('active');
        sidebarList.appendChild(li);
    });

    if (courseData.length > 0) {
        loadTopic(courseData[0].id);
    }
});

function loadTopic(topicId) {
    const selectedTopic = courseData.find(item => item.id === topicId);
    if (!selectedTopic) return;

    document.getElementById('lesson-content').innerHTML = selectedTopic.content || '';
    document.getElementById('lesson-title').textContent = selectedTopic.title;
    document.getElementById('lesson-text').textContent = selectedTopic.description;
    document.getElementById('lesson-note').textContent = selectedTopic.note || '';

    renderList('lesson-objectives', selectedTopic.objectives || []);
    renderList('lesson-key-points', selectedTopic.keyPoints || []);

    const codeBlock = document.getElementById('code-display');
    codeBlock.textContent = selectedTopic.codeSnippet || '';
    Prism.highlightElement(codeBlock);

    document.querySelectorAll('#lesson-list li').forEach((item, index) => {
        item.classList.toggle('active', courseData[index].id === topicId);
    });
}

function renderList(elementId, items) {
    const list = document.getElementById(elementId);
    list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

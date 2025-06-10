document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/podcasts.json');
  const podcasts = await response.json();
  const container = document.getElementById('podcast-list');

  podcasts.forEach(podcast => {
    const div = document.createElement('div');
    div.className = 'bg-gray-700 p-4 rounded shadow';
    div.innerHTML = `
      <h3 class="text-lg font-semibold mb-2">${podcast.title}</h3>
      <audio controls class="w-full">
        <source src="${podcast.url}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    `;
    container.appendChild(div);
  });
});

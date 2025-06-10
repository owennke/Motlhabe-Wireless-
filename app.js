document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/podcasts.json');
  const podcasts = await response.json();
  const container = document.getElementById('podcast-list');

  podcasts.forEach(podcast => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${podcast.title}</h3>
      <audio controls>
        <source src="${podcast.url}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    `;
    container.appendChild(div);
  });
});

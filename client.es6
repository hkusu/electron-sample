const container = document.getElementById('container');

fetch('https://qiita.com/api/v1/items')
  .then(res => res.json())
  .then(res => {
    res.forEach(r => {
      container.innerHTML += `${r.title}<br>`;
    });
  });

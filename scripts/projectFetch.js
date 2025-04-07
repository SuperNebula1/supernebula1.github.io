
fetch("https://api.supernebula.dev/api/projects?sort=createdAt:desc&pagination[limit]=2&populate=*")
    .then(res => res.json())
    .then(data => {
        const entries = data.data;
        
        entries.forEach((project, index) => {
            const cardIndex = index + 1;
            
            if (!project || !project.Image || !project.Image.url) {
              console.warn(`Skipping project at index ${index}: Missing required data`);
              return;
            }
        
            const { Title, Description, Image, id } = project;
            const imageUrl = "https://api.supernebula.dev" + Image.url;
        
            document.getElementById(`project${cardIndex}-title`).textContent = Title;
            document.getElementById(`project${cardIndex}-desc`).textContent = Description;
            document.getElementById(`project${cardIndex}-img`).alt = Title;
            document.getElementById(`project${cardIndex}-img`).src = imageUrl;
            document.getElementById(`project${cardIndex}-btn`).onclick = () => {
              window.location.href = `projects.html`;
            };
        });
    })
    .catch(err => {
    console.error("Failed to load projects:", err);
});
const content = ['Circles', 'Fractal tree']

for(let i = 0; i < content.length; i++){
    const div = document.createElement('div');
    div.id = 'img-container';

    const image = document.createElement('img');
    image.src = `${i}/img.PNG`;
    
    image.style.cursor = 'pointer';

    image.onclick = () => {
        window.open(`${i}/index.html`, '_self');
    };

    paragraph = document.createElement('p');
    paragraph.innerText = content[i];

    div.appendChild(image);
    div.appendChild(paragraph);

    document.body.appendChild(div);
}
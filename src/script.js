document.addEventListener('DOMContentLoaded', () => {
    // Partículas flutuantes genéricas
    const createParticle = () => {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '16px';
        particle.style.height = '16px';
        particle.style.background = `url('https://minecraft.wiki/images/Grass_Block.png')`;
        particle.style.backgroundSize = 'cover';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = '-20px';
        particle.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        document.body.appendChild(particle);
        particle.addEventListener('animationend', () => particle.remove());
    };
    setInterval(createParticle, 1000);

    // Animação ao clicar no conteúdo
    const content = document.querySelector('.content');
    content.addEventListener('click', () => {
        content.style.transform = 'scale(1.05)';
        setTimeout(() => content.style.transform = 'scale(1)', 200);
    });

    // Scroll suave para links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Estilo das partículas
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        0% { transform: translateY(-20px); opacity: 1; }
        100% { transform: translateY(${window.innerHeight}px); opacity: 0; }
    }
`;
document.head.appendChild(style);
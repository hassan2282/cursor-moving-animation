
    const spark = (event) => {
            let i = document.createElement('i');
            i.style.left = (event.pageX) + 'px';
            i.style.top = (event.pageY) + 'px';
            i.style.scale = `${Math.random() * 2 + 1}`;
            i.style.setProperty('--x', getTransitionValue());
            i.style.setProperty('--y', getTransitionValue());

            document.body.appendChild(i);

            setTimeout(() => {
                document.body.removeChild(i);
            }, 1000)
        }
        const getTransitionValue = () => {
            return `${Math.random() * 400 - 200}px`
        }
        document.addEventListener('mousemove', spark);

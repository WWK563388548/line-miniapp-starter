function createElement() {
    const ele = document.createElement('div');
    ele.innerHTML = 'Hello, React';
    const root = document.querySelector('#root');
    root.appendChild(ele);
}

createElement();
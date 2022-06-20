const disciplina = 'POO';
console.log(disciplina);

pre {
    font-family: 'Monaco';
    /*border-radius: 10px;*/
    --border-width: 3px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    font-size: 2.5rem;
    color: white;
    background: #595959;
    border-radius: var(--border-width);
  }
  
  pre::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(60deg, #5f86f2, #a65ff2, #f25fd0, #f25f61, #f2cb5f, #abf25f, #5ff281, #5ff2f0);
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * var(--border-width));
    animation: moveGradient 4s alternate infinite;
  }
  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
   }
  }
  
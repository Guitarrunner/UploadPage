import styled from "styled-components";
interface Props {
  o?: {
    scrollNav?: any;
  };
}
export const Buttonn = styled.button<Props>`
  display: ${(Props) => (Props.o?.scrollNav ? `none` : `content`)};
  position: fixed;
  top: 85vh;
  right: 5vw;
  width: 15vw;
  height: 7vh;
  margin: 20px;
  line-height: 110%;
  letter-spacing: 2px;
  background-color: rgb(70, 148, 226);
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-white);
  trasnition: var(--speed-normal);
  border: 1px solid var(--color-red);

  &:hover {
    border: 1px solid transparent;
    background: var(--color-red) url(https://i.postimg.cc/wBXGXbWN/pixel.png); // 360px x 1080px
    transition-delay: 0.8s;
    background-size: 180px;
    animation: animate var(--speed-fast) steps(8) forwards;
  }
  &:last-of-type {
    border: 1px solid var(--color-purple);
    &:hover {
      background: var(--color-purple)
        url(https://i.postimg.cc/FzBWFtKM/pixel2.png); // 360px x 1080px
    }
  }
}
@media (max-width: 768px) {
  .al {
    width: 25vw;
    height: 10vw;
  }
}

@keyframes animate {
  0% {
    background-position-y: 0;
  }
  100% {
    background-position-y: -480px;
  }`;
